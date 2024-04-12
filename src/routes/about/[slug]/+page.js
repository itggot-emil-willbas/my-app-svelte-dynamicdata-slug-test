//@ts-ignore
import  {banan}  from './banan'

/** @type {import('./$types').PageLoad} */
export function load({ params }) {

 let siffra = parseInt(params.slug)

	return {
		post: {
			title: `Title for ${params.slug} goes here`,
			content: `Content for ${params.slug} goes here`,
      extra: `Content for ${ banan[siffra]["name"] } goes here`,
      src: `${ banan[siffra]["src"] }`
		}
	};
}