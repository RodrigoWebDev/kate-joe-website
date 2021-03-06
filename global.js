import React from "react"
import { Global, css } from "@emotion/core"

export default () => (
  <>
    <Global
      styles={css`
        html {
          box-sizing: border-box;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        blockquote,
        p,
        pre,
        code,
        dl,
        dd,
        ol,
        ul,
        figure,
        hr,
        fieldset,
        legend {
          margin: 0;
          padding: 0;
        }
        * {
          &,
          &:before,
          &:after {
            box-sizing: inherit;
          }
        }
        main {
          display: block;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-size: inherit;
        }
        strong {
          font-weight: bold;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        img {
          border-style: none;
          max-width: 100%;
          height: auto;
          vertical-align: middle;
        }
        a {
          background-color: transparent;
          -webkit-text-decoration-skip: objects;
        }
        input,
        select,
        textarea {
          margin: 0;
        }
        input {
          overflow: visible;
        }
        select {
          text-transform: none;
        }
        [type="checkbox"],
        [type="radio"] {
          padding: 0;
        }
        [type="number"]::-webkit-inner-spin-button,
        [type="number"]::-webkit-outer-spin-button {
          height: auto;
        }
        [type="search"] {
          -webkit-appearance: textfield;
          outline-offset: -2px;
        }
        [type="search"]::-webkit-search-cancel-button,
        [type="search"]::-webkit-search-decoration {
          -webkit-appearance: none;
        }
        ::-webkit-file-upload-button {
          -webkit-appearance: button;
          font: inherit;
        }
      `}
    />
    <Global
      styles={theme => ({
        a: {
          textDecoration: "none",
          "&:hover": {
            color: theme.colors.primary,
          },
        },
      })}
    />
  </>
)
