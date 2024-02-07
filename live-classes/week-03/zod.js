const z = require("zod")
// const mySchema = z.string();

// const mySchema1 =z.array(z.number())

// const mySchema = z.array(z.string())
// const mySchema =  z.object(
//   {
//     email:z.string(),
//     name:z.string(),
//     country:z.literal("in").or(z.literal("us"))
//   }
// )

const mySchema = z.array(z.string())
// const obj1 = {
//   email:"krishna",
//   name:"kn",
//   country:"in"
  
// }

const ar = [5]

console.log(mySchema.safeParse(ar))
