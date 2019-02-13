import React, { Component, Suspense, lazy } from "react"
import cx from "classnames"
import { prefix, Flex } from "@porscheui/porsche-ui-kit"
import Background from "../../assets/img/bg.png"
import "./introduction.scss"

import { Stories } from "../../../stories"

const Story = lazy(() => Stories.Layout.Flex)

class Introduction extends Component {
  render() {
    return (
      <div className={cx(prefix("introduction"))}>
        <header className={cx(prefix("introduction__header"))} />
        <main className={cx(prefix("introduction__stage"))}>
          <h1>Porsche UI Kit</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <Story />
          </Suspense>
          <img className={cx(prefix("introduction__stage-img"))} src={Background} alt="" />
        </main>
      </div>
    )
  }
}

export default Introduction
