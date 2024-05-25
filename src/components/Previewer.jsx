import { parseMarkdown } from '/src/utils.js'


export function Previewer({input, maximize}) {
    return (
        <div id="preview-div">
        <div id="preview-title">
          <h4>Previewer</h4>
          <span id="maximize-btn" onClick={maximize}>
            <i class="fa-solid fa-maximize"></i>
          </span>
        </div>
        <div id="preview"  dangerouslySetInnerHTML={{ __html: parseMarkdown(input) }}  className="markdown-table">
          
        </div>
      </div>
    )
}