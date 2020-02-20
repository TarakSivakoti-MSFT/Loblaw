import * as React from "react";
import styles from "./LoblawHome.module.scss";
import { ILoblawHomeProps } from "./ILoblawHomeProps";
// import logo from "https://m365x520260.sharepoint.com/sites/Loblaw/Shared%20Documents/logo.png";
import cx from "classnames";
const logo: any = require("./imgs/logo.png");

export default class LoblawHome extends React.Component<ILoblawHomeProps, {}> {
  public render(): React.ReactElement<ILoblawHomeProps> {
    return (
      <div className={styles.loblawHome}>
        <div className={styles.nav}>
          Welcome to fl!p
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.fancyborder}></div>

        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className={cx("card-header", styles.ch)} id="headingOne">
              <h2 className="mb-0">
                <button
                  className={cx("btn btn-link", styles.btlink)}
                  type="button"
                  data-toggle="collapse"
                  data-target="#box1"
                  aria-expanded="true"
                  aria-controls="box1"
                >
                  Features
                </button>
              </h2>
            </div>

            <div
              id="box1"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card">
                <div className="row">
                  <div className="col-4">
                    <div className={cx("card", styles.car)}>
                      <div className={cx("card-body", styles.cb)}>
                        <h6 className="card-title">
                          Not just another bunch of pretty faces
                        </h6>
                        <p className="card-text">
                          <small className="text-muted">8/6/2019</small>
                        </p>
                      </div>
                    </div>
                    <div className={cx("card")}>
                      <div className={cx("card-body", styles.cb)}>
                        <h6 className="card-title">
                          Not just another bunch of pretty faces
                        </h6>
                        <p className="card-text">
                          <small className="text-muted">8/6/2019</small>
                        </p>
                      </div>
                    </div>
                    <div className={cx("card")}>
                      <div className={cx("card-body", styles.cb)}>
                        <h6 className="card-title">
                          Not just another bunch of pretty faces
                        </h6>
                        <p className="card-text">
                          <small className="text-muted">8/6/2019</small>
                        </p>
                      </div>
                    </div>
                    <div className={cx("card")}>
                      <div className={cx("card-body", styles.cb)}>
                        <h6 className="card-title">
                          Not just another bunch of pretty faces
                        </h6>
                        <p className="card-text">
                          <small className="text-muted">8/6/2019</small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="row">
                      <div className="col-6">
                        <div className={styles.img1}></div>
                      </div>
                      <div className="col-6">
                        <div className={styles.img2}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className={cx("card-header", styles.ch)} id="headingTwo">
              <h2 className="mb-0">
                <button
                  className={cx("btn btn-link collapsed", styles.btlink)}
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Message Center
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div className="card">
            <div className={cx("card-header", styles.ch)} id="headingThree">
              <h2 className="mb-0">
                <button
                  className={cx("btn btn-link collapsed", styles.btlink)}
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Store Resources
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
