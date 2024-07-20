import React, { useEffect } from "react";
import "./Third-Sec.css";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ThirdSec({
  backGroundImg,
  p1,
  h1,
  p2,
  link,
  text,
  navLinks,
  direction,
  btn,
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="third-sec">
      <div className="container" style={{ direction: direction }} ref={ref}>
        <motion.div
          className="left-div"
          style={{ backgroundImage: `url(${backGroundImg})` }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        ></motion.div>
        <div className="right-div-container" ref={ref}>
          <div className="right-div" style={{ direction: "initial" }}>
            {p1 && (
              <motion.p
                className="top"
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  show: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.4,
                }}
              >
                {p1}
              </motion.p>
            )}
            <motion.h1
              className="tittle"
              variants={{
                hidden: { opacity: 0, x: 200 },
                show: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              {h1}
            </motion.h1>
            <motion.p
              className="paragraph"
              variants={{
                hidden: { opacity: 0, x: 200 },
                show: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.4,
              }}
            >
              {p2}
            </motion.p>
            {text && (
              <Link to={link} className="btn">
                {text}
              </Link>
            )}
            {navLinks && (
              <ul>
                {navLinks.map(({ text, link }, index) => (
                  <li key={index}>
                    <Link to={link} className="contact-third-link">
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {btn && <Link to="/" className="link">{btn}</Link>}
          </div>
        </div>
      </div>
    </div>
  );
}
