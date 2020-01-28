

[@react.component]
let make = (~name) =>{
 

<div>
<Input name="username"/>
<Input name="password"/>
<button type_="submit">{ReasonReact.string(name)}</button>
</div>



};
