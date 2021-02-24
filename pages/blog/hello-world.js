import Link from 'next/link'

export default function HelloWorld() {
  return (
    <>
      <h1>Hello World</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
     
    </>
  )
}