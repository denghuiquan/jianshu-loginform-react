import { css } from '@emotion/react'

export default css`
  .App {
    text-align: center;
  }

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-main {
    background-color: #f1f1f1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    text-align: center;
    font-size: 14px;
    position: relative;
  }
  .navbar {
    height: 48px;
    width: 100%;
    position: fixed;
    top: 0;

    & a {
      text-decoration: none;
      &:hover {
        color: #ea6f5a;
      }

      &.active {
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
        &:hover {
          cursor: default;
        }
      }
    }
  }
  .main {
    width: 400px;
    margin: 0 auto;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgb(0 0 0 / 10%);
    vertical-align: middle;
    display: inline-block;
    position: absolute;
    top: 130px;
    left: 50%;
    margin: 0 0 0 -200px;
    box-shadow: none;

    & .title {
      margin: 0 auto 50px;
      padding: 10px;
      font-weight: 400;
      color: #969696;
      & a {
        font-weight: 700;
        &:hover {
          color: #ea6f5a;
          text-decoration: none;
          border-bottom: 2px solid #ea6f5a;
        }
      }
      & a.active {
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
        &:hover {
          cursor: default;
        }
      }
    }

    & .sign-container {
      margin-top: 0;
      color: #969696;
      .user-form {
        input:focus {
          outline: none;
        }
      }
      .more-sign {
        margin-top: 50px;
        h6 {
          position: relative;
          margin: 0 0 10px;
          font-size: 12px;
          color: #b5b5b5;
          font-weight: bold;
          ::before,
          ::after {
            content: '';
            border-top: 1px solid #b5b5b5;
            display: block;
            position: absolute;
            width: 60px;
            top: 8px;
          }
          ::before {
            left: 30px;
          }
          ::after {
            right: 30px;
          }
        }
        ul {
          margin-top: 0;
          margin-bottom: 10px;
          list-style: none;
          svg {
            font-size: 28px;
            vertical-align: middle;
          }
        }
      }
      .sign-up-msg {
        margin: 10px 0;
        padding: 0;
        text-align: center;
        font-size: 12px;
        line-height: 20px;
        color: #969696;
        & a {
          color: #3194d0;
        }
      }
    }
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
