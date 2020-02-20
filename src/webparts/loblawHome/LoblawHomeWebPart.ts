import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";

import * as strings from "LoblawHomeWebPartStrings";
import LoblawHome from "./components/LoblawHome";
import { ILoblawHomeProps } from "./components/ILoblawHomeProps";
import { SPComponentLoader } from "@microsoft/sp-loader";
import "jquery";
require("bootstrap");
import * as microsoftTeams from "@microsoft/teams-js";
microsoftTeams.initialize();

export interface ILoblawHomeWebPartProps {
  description: string;
}

export default class LoblawHomeWebPart extends BaseClientSideWebPart<
  ILoblawHomeWebPartProps
> {
  public render(): void {
    let cssURL =
      "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css";
    SPComponentLoader.loadCss(cssURL);

    const element: React.ReactElement<ILoblawHomeProps> = React.createElement(
      LoblawHome,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
