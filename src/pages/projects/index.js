import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { StaticImage } from "gatsby-plugin-image"

export default function Projects() {
  return (
    <Layout>
      <div
        className={`${styles.portfolio} grid grid-cols-1 gap-10 justify-items-center content-center`}
      >
        <div className={` flex flex-row items-center mb-10`}>
          <div className="mr-10 ">
            <StaticImage
              src="../../images/mimoji.png"
              alt="mimoji"
              width={300}
              height={300}
            />
          </div>
          <div className=" text-left ">
            <h2>Yunji Lee</h2>
            <h3>Web Developer & Mobile Application Developer</h3>
            <div className="flex ml-2 my-3 items-center">
              <a href="https://www.naver.com/" className="mr-4">
                <StaticImage
                  src="../../images/github.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://www.naver.com/" className="mr-4">
                <StaticImage
                  src="../../images/instagram.svg"
                  alt="Instagram"
                  width={22}
                  height={25}
                />
              </a>
              <a href="https://www.naver.com/" className="">
                <StaticImage
                  src="../../images/linkedin.svg"
                  alt="LinkedIn"
                  width={22}
                  height={25}
                />
              </a>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-row items-center "> */}
        <div className="grid grid-rows-3 md:grid-cols-3 gap-4 items-center grid-flow-col mb-14 mr-12 ml-12">
          <div className=" text-center md:text-left md:col-span-2 md:row-span-2 md:mr-10 self-end md:pb-4">
            <h2>Web Developer</h2>
            <p>
              I am passionate about UI/UX design and Web Design. I am a skilled
              front-end developer and master of graphic design tools such as
              Photoshop and Sketch. I am a quick learner and a team worker that
              gets the job done. I can easily capitalize on low hanging fruits
              and quickly maximize timely deliverables for real-time schemas.
            </p>
          </div>
          <div className=" text-center md:text-left md:self-start">
            <div className="pb-1">
              <b>Age</b>: 23
            </div>

            <div className="pb-1">
              <b>Email:</b> yunji.isy@google.com
            </div>
            <div className="pb-1">
              <b>Phone: </b>+82 10-5513-6459
            </div>

            <div className="pb-1">
              <b>Address: </b>Seoul, Korea
            </div>
          </div>
          <div className=" md:col-span-1 md:row-span-3 md:ml-10 md:mb-0">
            <StaticImage
              src="../../images/yunjiLee.jpeg"
              alt="mimoji"
              width={300}
              height={380}
            />{" "}
          </div>
        </div>
        <div className="mb-12">
          <div className="text-center mb-5 ">
            <h2 className="marker marker-center">Skills</h2>
            <StaticImage src="../../images/marker.svg" alt="marker" />
            <div className="grid grid-cols-1 md:grid-cols-4 mt-8 gap-x-8 gap-y-5 py-3">
              <button class="transition drop-shadow-md  px-4 py-2 ease-in-out delay-100 bg-lightBlue rounded-lg hover:-translate-y-1 hover:scale-110  duration-200 ">
                <StaticImage
                  src="../../images/front.svg"
                  alt="graphic design"
                />
                <div className="font-semibold text-darkBlue mt-2">
                  web-front
                </div>
              </button>
              <button class="transition drop-shadow-md px-4 py-2 ease-in-out delay-100 bg-lightBlue rounded-lg hover:-translate-y-1 hover:scale-110  duration-200 ">
                <StaticImage
                  src="../../images/flutter.svg"
                  alt="graphic design"
                />
                <div className="font-semibold text-darkBlue mt-2">flutter</div>
              </button>
              <button class="transition drop-shadow-md px-4 py-2 ease-in-out delay-100 bg-lightBlue rounded-lg hover:-translate-y-1 hover:scale-110  duration-200 ">
                <StaticImage src="../../images/ui.svg" alt="graphic design" />
                <div className="font-semibold text-darkBlue mt-2">UI/UX</div>
              </button>
              <button class="transition drop-shadow-md px-4 py-2 ease-in-out delay-100 bg-lightBlue rounded-lg hover:-translate-y-1 hover:scale-110  duration-200 ">
                <StaticImage
                  src="../../images/react.svg"
                  alt="graphic design"
                />
                <div className="font-semibold text-darkBlue mt-2">React</div>
              </button>
            </div>
          </div>
        </div>
        <div className=" mb-12">
          <div className="text-center mb-5 ">
            <h2 className="marker marker-center">My Services</h2>
            <StaticImage
              src="../../images/marker.svg"
              alt="marker"
              // width={150}
              // height={30}
            />
          </div>
          <div className="text-center">
            <p className="mx-auto mb-3 max-w-600">
              I offer services fit for any website or app. I can quickly
              maximize timely deliverables for real-time schemas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3">
            <div className="col-span-1 text-center">
              <StaticImage
                className="mb-2 w-24 h-24"
                src="../../images/web-design.svg"
                alt="web design"
                // width={20}
                // height={20}
              />
              <div className="text-lg font-bold">Web Design</div>
            </div>
            <div className="col-span-1 text-center">
              <StaticImage
                className="mb-2 w-24 h-24"
                src="../../images/graphic-design.svg"
                alt="graphic design"
              />
              <div className="text-lg font-bold">Web Development</div>
            </div>

            <div className="col-span-1 text-center">
              <StaticImage
                className="mb-2 w-24 h-24"
                src="../../images/app-development.svg"
                alt="app development"
              />
              <div className="text-lg font-bold">App Development</div>
            </div>
          </div>
        </div>

        <div className=" text-left mb-15">
          <div className="text-center mb-9">
            <h2 className="">Experience</h2>
            <StaticImage
              src="../../images/marker.svg"
              alt="mimoji"
              // width={150}
              // height={30}
            />
          </div>
          <div className="grid grid-rows-1 md:grid-cols-2 gap-4 p-12 md:p-8">
            <div className="card-portfolio mb-3 transition ease-in-out delay-100  hover:-translate-y-2  duration-200">
              <div className="card-header px-3 py-2">
                <div className="flex justify-between">
                  <div>
                    <h3 className="h5 mb-1">App Development, Design</h3>
                    <div className="text-muted text-small">
                      Global Media <small>(Dec 2021 - Mar 2022)</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body px-3 py-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eleifend auctor dolor, eu tincidunt enim lacinia ac. Maecenas
                  in ligula id nisl consectetur viverra. Vestibulum vulputate
                  interdum lorem nec mattis. Sed tempus interdum ex, id laoreet
                  magna tincidunt vel. Nulla facilisi.
                </p>
                <p>
                  Cras ac lacus dapibus, venenatis erat vel, euismod quam.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Mauris ac faucibus velit.
                </p>
              </div>
            </div>
            <div className="card-portfolio mb-3 transition ease-in-out delay-100  hover:-translate-y-2  duration-200">
              <div className="card-header px-3 py-2">
                <div className="flex justify-between">
                  <div>
                    <h3 className="h5 mb-1">App Development, Design</h3>
                    <div className="text-muted text-small">
                      Global Media <small>(Dec 2021 - Mar 2022)</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-portfolio-body px-3 py-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eleifend auctor dolor, eu tincidunt enim lacinia ac. Maecenas
                  in ligula id nisl consectetur viverra. Vestibulum vulputate
                  interdum lorem nec mattis. Sed tempus interdum ex, id laoreet
                  magna tincidunt vel. Nulla facilisi.
                </p>
                <p>
                  Cras ac lacus dapibus, venenatis erat vel, euismod quam.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Mauris ac faucibus velit.
                </p>
              </div>
            </div>
            <div className="card-portfolio mb-3 transition ease-in-out delay-100  hover:-translate-y-2  duration-200">
              <div className="card-header px-3 py-2">
                <div className="flex justify-between">
                  <div>
                    <h3 className="h5 mb-1">Web Design</h3>
                    <div className="text-muted text-small">
                      Webbie LLC. <small>(2018-2020)</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body px-3 py-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eleifend auctor dolor, eu tincidunt enim lacinia ac. Maecenas
                  in ligula id nisl consectetur viverra. Vestibulum vulputate
                  interdum lorem nec mattis.
                </p>
                <p>
                  Cras ac lacus dapibus, venenatis erat vel, euismod quam.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas.
                </p>
              </div>
            </div>
            <div className="card-portfolio mb-3 transition ease-in-out delay-100  hover:-translate-y-2  duration-200">
              <div className="card-header px-3 py-2">
                <div className="flex justify-between">
                  <div>
                    <h3 className="h5 mb-1">Full Stack Development</h3>
                    <div className="text-muted text-small">
                      Coder Inc. <small>(2020-2021)</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body px-3 py-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eleifend auctor dolor, eu tincidunt enim lacinia ac. Maecenas
                  in ligula id nisl consectetur viverra. Vestibulum vulputate
                  interdum lorem nec mattis.
                </p>
                <p>
                  Cras ac lacus dapibus, venenatis erat vel, euismod quam.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
