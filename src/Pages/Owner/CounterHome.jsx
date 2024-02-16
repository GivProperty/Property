import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

function CounterHome(props) {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("count-up-section");
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        if (scrollY > sectionTop - windowHeight + sectionHeight / 2) {
          setStartCounting(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <div className="counter">
        {/* <CountUp end={100} duration={5} /> */}

        {/* <div>
          <div id="count-up-section" style={{ height: "10px" }}></div>
          <div>
            <CountUp
              start={startCounting ? 0 : null}
              end={100}
              duration={5}
              redraw={true}
            >
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </div>
        </div> */}

        <div id="count-up-section"></div>
        <div className="box-contain">
          <div className="box">
            <CountUp
              className="span one"
              start={startCounting ? 0 : null}
              end={87}
              duration={5}
              redraw={true}
            />
            <h4>Satisfied Owners</h4>
          </div>
          <div className="box">
            <CountUp
              className="span two"
              start={startCounting ? 0 : null}
              end={202}
              duration={5}
              redraw={true}
            />
            <h4>Satisfied Tenants</h4>
          </div>
          {/* <div className="box">
            <CountUp
              className="span three"
              start={startCounting ? 0 : null}
              end={100}
              duration={5}
              redraw={true}
            />
            <h4>Satisfied Customers</h4>
          </div>
          <div className="box">
            <CountUp
              className="span four"
              start={startCounting ? 0 : null}
              end={100}
              duration={5}
              redraw={true}
            />
            <h4>Satisfied Customers</h4>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CounterHome;
