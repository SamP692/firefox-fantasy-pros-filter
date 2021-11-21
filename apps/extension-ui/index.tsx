/* Libraries */
import { h, render } from 'preact'

/* Utils */
import { getEntryElement } from '~ui/utils'

/* App Entry Point Element */
const appEntryElement = getEntryElement()

const SomeTestElement = () => (
    <span>Some Test Element</span>
)

/* App Initialization */
render(
    <SomeTestElement />,
    appEntryElement
)
