import requests
from bs4 import BeautifulSoup
import json
from urllib.parse import urljoin
import asyncio
import aiohttp
import os

async def fetch(session, url):
    async with session.get(url) as response:
        if response.status != 200:
            raise Exception(f"Failed to load page {url}")
        return await response.text()

async def extract_images_and_text(session, url, all_images):
    try:
        content = await fetch(session, url)
        soup = BeautifulSoup(content, 'html.parser')

        # Extract images
        for img_tag in soup.find_all('img'):
            img_url = img_tag.get('src')
            if img_url:
                img_url = urljoin(url, img_url)
                all_images.append(img_url)

        # Extract text
        texts = [p_tag.get_text(strip=True) for p_tag in soup.find_all('p')]

        data = {
            'url': url,
            'texts': texts
        }
        return data

    except Exception as e:
        print(f"Error extracting data from {url}: {e}")
        return None

async def main(urls, existing_images, existing_data):
    all_images = existing_images.copy()
    async with aiohttp.ClientSession() as session:
        tasks = [extract_images_and_text(session, url, all_images) for url in urls]
        results = await asyncio.gather(*tasks)
        filtered_results = [result for result in results if result]
        return {
            'data': existing_data + filtered_results,
            'images': all_images
        }

def load_existing_data(filename):
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {'data': [], 'images': []}

def save_to_json(data, filename):
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

if __name__ == '__main__':
    urls = [
        'https://www.frontiercoop.com/herbs-and-teas?product_list_limit=100', 
        'https://www.frontiercoop.com/herbs-and-teas?p=2&product_list_limit=100',
        'https://www.frontiercoop.com/herbs-and-teas?p=3&product_list_limit=100'
    ]  # Replace with the URLs of the websites you want to scrape

    filename = 'extracted_data.json'
    existing_data = load_existing_data(filename)
    existing_urls = {entry['url'] for entry in existing_data['data']}
    new_urls = [url for url in urls if url not in existing_urls]

    loop = asyncio.get_event_loop()
    extracted_data = loop.run_until_complete(main(new_urls, existing_data['images'], existing_data['data']))
    save_to_json(extracted_data, filename)
    print(f"Data extracted and saved to '{filename}'")
