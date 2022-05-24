# chipbot-wrapper

<a href="https://www.npmjs.com/package/chipbot-wrapper">
<img src="https://img.shields.io/npm/v/chipbot-wrapper?color=%23fff&style=flat-square"></img>
<img src="https://img.shields.io/npm/dw/chipbot-wrapper?color=black&style=flat-square"></img>
<img src="https://img.shields.io/librariesio/release/npm/chipbot-wrapper?style=flat-square"></img>
</a>
<br>
<br>

A lightweight wrapper for chipbot.

## Usage
1. Install package.

   ```bash
   npm i chipbot-wrapper
   ```

2. Add it to your project.

   ```ts
   import { defineChipbot } from 'chipbot-wrapper'

   const chipbot = defineChipbot({
     id: 'my-chipbot-id',
     domainId: 'my-chipbot-domain-id',
     onload() {
       this.hide()
       // Or
       chipbot.hide()
     }
   })
   ```

3. Usage in other files
`Important:` chipbot has to be defined first (Follow step #2)

   ```ts
   import { chipbot } from 'chipbot-wrapper'

   chipbot.hide()
   ```
   

4. Profit 🎉
