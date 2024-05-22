import { parseMarkdown } from "../utils"

export function Previewer({input}) {
    return (
        <div id="main-div">
        <div id="main-title">
          <h4>Previewer</h4>
          <span id="maximize-btn">
            <i class="fa-solid fa-maximize"></i>
          </span>
        </div>
        <div id="previewer-div"  dangerouslySetInnerHTML={{ __html: parseMarkdown(input) }}>
          
        </div>
      </div>
    )
}