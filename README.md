# GENERAL DISCLAIMER
The original [Stately](https://github.com/intridea/stately) is copyrighted by [Intridea](http://www.intridea.com/) and you can find the original here » [Stately](https://github.com/intridea/stately)

# StatelyBrazil
StatelyBrazil is the Brazilian version [copied and adapted] of [Stately](https://github.com/intridea/stately). StatelyBrazil makes it easier to create maps for data visualization of Brazil using only HTML & CSS. Each state can be styled independently with CSS for making simple visualizations. And since it's a font, it scales whithout losing definition.

## Files
    statelybrazil/original-map.svg      - Original SVG map used to create the font
    statelybrazil/statelybrazil.svg     - The SVG font file
    statelybrazil/statelybrazil.ttf     - TrueType font file - converted from the SVG using [FreeFontConverter](http://www.freefontconverter.com/index.php)
    statelybrazil/assets/font           - Folder containing the @font-face ready files - exported using [FontSquirrel @font-face generator](http://www.fontsquirrel.com/fontface/generator)
    statelybrazil/assets/sass           - Folder containing basic SASS files, including both StatelyBrazil setup and demo
    statelybrazil/assets/css            - Folder containing compiled CSS files
    statelybrazil/statelybrazil.html    - Basic Demo
    The original Stately files were kept in for reference.

## How it Works?
StatelyBrazil is a symbol font were the letters are formed by the shapes of the states of Brazil. Like it's American counterpart, each letter corresponds to a state, in alphabetical order by the state acronym.

### Reference of States
    AC · A · Acre
    AL · B · Alagoas
    AP · C · Amapá
    AM · D · Amazonas
    BA · E · Bahia
    CE · F · Ceará
    DF · G · Distrito Federal
    ES · H · Espírito Santo
    GO · I · Goiás
    MA · J · Maranhão
    MT · K · Mato Grosso
    MS · L · Mato Grosso do Sul
    MG · M · Minas Gerais
    PA · N · Pará
    PB · O · Paraíba
    PR · P · Paraná
    PE · Q · Pernambuco
    PI · R · Piauí
    RJ · S · Rio de Janeiro
    RN · T · Rio Grande do Norte
    RS · U · Rio Grande do Sul
    RO · V · Rondônia
    RR · W · Roraima
    SC · X · Santa Catarina
    SP · Y · São Paulo
    SE · Z · Sergipe
    TO · a · Tocantins


## Basic Use Case
1. Download StatelyBrazil to your computer.
2. Copy the `statelybrazil/assets/` and `statelybrazil/assets/` to your project public folder.
3. Add the `statelybrazil.css` to the head of your document.
``<link rel="stylesheet" href="assets/css/statelybrasil.css">``

Then add this markup to the page:
```html
<ul class="statelybrazil"> 
  <li data-state-acronym="AC" data-state-name="Acre"                 class="statelybrazil-state-ac statelybrazil-state">A</li>
  <li data-state-acronym="AL" data-state-name="Alagoas"              class="statelybrazil-state-al statelybrazil-state">B</li>
  <li data-state-acronym="AP" data-state-name="Amapá"                class="statelybrazil-state-ap statelybrazil-state">C</li>
  <li data-state-acronym="AM" data-state-name="Amazonas"             class="statelybrazil-state-am statelybrazil-state">D</li>
  <li data-state-acronym="BA" data-state-name="Bahia"                class="statelybrazil-state-ba statelybrazil-state">E</li>
  <li data-state-acronym="CE" data-state-name="Ceará"                class="statelybrazil-state-ce statelybrazil-state">F</li>
  <li data-state-acronym="DF" data-state-name="Distrito Federal"     class="statelybrazil-state-df statelybrazil-state">G</li>
  <li data-state-acronym="ES" data-state-name="Espírito Santo"       class="statelybrazil-state-es statelybrazil-state">H</li>
  <li data-state-acronym="GO" data-state-name="Goiás"                class="statelybrazil-state-go statelybrazil-state">I</li>
  <li data-state-acronym="MA" data-state-name="Maranhão"             class="statelybrazil-state-ma statelybrazil-state">J</li>
  <li data-state-acronym="MT" data-state-name="Mato Grosso"          class="statelybrazil-state-mt statelybrazil-state">K</li>
  <li data-state-acronym="MS" data-state-name="Mato Grosso do Sul"   class="statelybrazil-state-ms statelybrazil-state">L</li>
  <li data-state-acronym="MG" data-state-name="Minas Gerais"         class="statelybrazil-state-mg statelybrazil-state">M</li>
  <li data-state-acronym="PA" data-state-name="Pará"                 class="statelybrazil-state-pa statelybrazil-state">N</li>
  <li data-state-acronym="PB" data-state-name="Paraíba"              class="statelybrazil-state-pb statelybrazil-state">O</li>
  <li data-state-acronym="PR" data-state-name="Paraná"               class="statelybrazil-state-pr statelybrazil-state">P</li>
  <li data-state-acronym="PE" data-state-name="Pernambuco"           class="statelybrazil-state-pe statelybrazil-state">Q</li>
  <li data-state-acronym="PI" data-state-name="Piauí"                class="statelybrazil-state-pi statelybrazil-state">R</li>
  <li data-state-acronym="RJ" data-state-name="Rio de Janeiro"       class="statelybrazil-state-rj statelybrazil-state">S</li>
  <li data-state-acronym="RN" data-state-name="Rio Grande do Norte"  class="statelybrazil-state-rn statelybrazil-state">T</li>
  <li data-state-acronym="RS" data-state-name="Rio Grande do Sul"    class="statelybrazil-state-rs statelybrazil-state">U</li>
  <li data-state-acronym="RO" data-state-name="Rondônia"             class="statelybrazil-state-ro statelybrazil-state">V</li>
  <li data-state-acronym="RR" data-state-name="Roraima"              class="statelybrazil-state-rr statelybrazil-state">W</li>
  <li data-state-acronym="SC" data-state-name="Santa Catarina"       class="statelybrazil-state-sc statelybrazil-state">X</li>
  <li data-state-acronym="SP" data-state-name="São Paulo"            class="statelybrazil-state-sp statelybrazil-state">Y</li>
  <li data-state-acronym="SE" data-state-name="Sergipe"              class="statelybrazil-state-se statelybrazil-state">Z</li>
  <li data-state-acronym="TO" data-state-name="Tocantins"            class="statelybrazil-state-to statelybrazil-state">a</li>
</ul>
```

### Set the size and base map color in your CSS:
```css
.statelybrazil {
    width: 230px;     // width and font size must match 
    font-size: 300px; // width and font size must match 
    color: #808080;
}
```

### Style Individual State:
```css
.statelybrazil .statelybrazil-state-ac { 
    color: #F00; // Yes, Acre exists!
}
```

## Live Example
[Stately Microsite](http://intridea.github.com/stately/)

[Stately Brazil Microsite](http://dataviz.github.com/statelybrazil/)

## Resources
[Free Online Font Converter](http://www.freefontconverter.com) - For converting SVG to TTF  
[Font Squirrel](http://www.fontsquirrel.com/fontface/generator) - For converting TTF to web fonts (make sure you check 'no subsetting')  
[Intridea Blog: How to Make Your Own Symbol Font](http://www.intridea.com/blog/2012/4/24/symbol-font) - A good starting place

## Credits
StatelyBrazil project by:
* Leo Tartari
  * [twitter](http://twitter.com/leotartari)
  * [website](http://leotartari.com)

Original Stately project created by Ben Markowitz at Intridea:
* Ben Markowitz
  * [twitter](http://www.twitter.com/bpmarkowitz)
  * [website](http://www.benmarkowitz.com)
* Intridea
  * [website](http://www.intridea.com)

## License
MIT License. See LICENSE for details.

## To Do
* State acronyms in ligatures
* One letter for the whole map of Brazil
