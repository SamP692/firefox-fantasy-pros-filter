/* Libraries */
import { h, render } from 'preact'

/* Utils */
import { getEntryElement } from '~ui/utils'

/* App Entry Point Element */
const appEntryElement = getEntryElement()

/* App */
import App from '~ui/app'

/* Styles */
import './index.css'

/* App Initialization */
render(
    <App />,
    appEntryElement
)
