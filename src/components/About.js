'use client';

import React, { Component } from "react";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import nodeIcon from "@iconify/icons-logos/nodejs-icon";
import typescriptIcon from "@iconify/icons-logos/typescript-icon";
import openaiIcon from "@iconify/icons-logos/openai-icon";
import gcpIcon from "@iconify/icons-logos/google-cloud";
class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = `/assets/images/${this.props.sharedBasicInfo.image}`;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="row-md-5 mb-5 mt-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />

                  <Icon
                    icon={nodeIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />

                  <Icon
                    icon={typescriptIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />

                  <Icon
                    icon={openaiIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />

                  <Icon
                    icon={gcpIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span className="mac-dot mac-dot--red" />
                    <span className="mac-dot mac-dot--yellow" />
                    <span className="mac-dot mac-dot--green" />
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ms-3 me-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello}</span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
