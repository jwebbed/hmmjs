# hmmjs
Based on a project by @arkon

## Usage

A bare minimum usage of this package can be shown as follows:
```
import start from 'hmmjs';

start();
```

### `start`
`start(config)` starts the overlay with the input configuration. When there is no
input config param it uses the default config as listed below

#### `config.emojis`
`[ string ]` - defaults to a list of all emojis
Used to determine the pool of emojis that float across the screen

#### Roadmap
* 1.0.0
    * Call with emoji
    * Call for random emoji
    * Call with list of emojis
    * Return callback to stop
* 1.1.0
    * Granular control over transparency
    * Enable manipulation of layers of emoji
* 1.2.0
    * Allow custom fonts
