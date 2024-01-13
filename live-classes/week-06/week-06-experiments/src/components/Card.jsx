import React from 'react'

//One way to create wrapper
// function Card() {
//     return <div>
//         <Cardwrapper innercomponent={<TextComponent />} />
//         <Cardwrapper innercomponent={<TextComponent2 />} />
//     </div>
// }
// function TextComponent() {
//     return <div>
//         Hi There
//     </div>
// }
// function TextComponent2() {
//     return <div>
//         Hi There
//     </div>
// }
// function Cardwrapper({ innercomponent }) {
//     return <div style={{ border: "2px solid black", padding: "20px" }}>
//         {
//             innercomponent
//         }
//     </div>
// }


//Real way to create Wrapper class
function Card() {
    return <div>
        <Cardwrapper>
            Hi there
        </Cardwrapper>
        <Cardwrapper>
            Hi there Krishna
        </Cardwrapper>
    </div>
}
function Cardwrapper({ children }) {
    return <div style={{ border: "2px solid black", padding: "20px" }}>
        {children}
    </div>
}
export default Card