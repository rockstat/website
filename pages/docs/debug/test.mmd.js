import { Mermaid } from 'app/components/mermaid-alt';


export const mmTest = () => {
    <Mermaid>
        {/* graph TD
        A[Christmas] -->|Get money| B(Go shopping)
        B --> C{Let me think}
        C -->|One| D[Laptop]
        C -->|Two| E[iPhone]
        C -->|Three| F[Car] */}

        graph TD;
          A-->B;
          A-->C;
          B-->D;
          C-->D;
    </Mermaid>
}
