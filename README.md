<p align="center">
  <img src="less2css_sample.png" alt="less2cssUI" width="50%"/>
</p>

## Instrucions with VS Code
* Clone this repo or download the index.html file
* Install and activate the live preview extension by Microsoft
* Add .less code in styles.less (in the same directory as index.html) & save
* Right click on the index.html file and select live preview

## Instructions without VS Code
* Clone this repo or download the index.html file
* Add .less code in styles.less (in the same directory as index.html) & save
* Start an HTTP server from the current directory. You can simply use `python -m http.server`
* Open `localhost:8080` in a web browser

## Sample LESS content
```less
// Variables
@primary-color: #4CAF50;
@font-size: 16px;

// Mixins
.border-radius(@radius) {
  -webkit-border-radius: @radius;
     -moz-border-radius: @radius;
      -ms-border-radius: @radius;
          border-radius: @radius;
}

// Styles
body {
  font-size: @font-size;
  color: @primary-color;
}

.button {
  .border-radius(5px);
  background-color: @primary-color;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darken(@primary-color, 10%);
  }
}
```