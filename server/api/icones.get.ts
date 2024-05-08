import {parseHTML} from 'linkedom'

export default defineEventHandler(async (event) => {

  const query = getQuery(event)
  const html = await $fetch(`https://icon-sets.iconify.design/?query=${query.s}`) as string

  getIcons(html)

  return {hello: 'world'}
})


async function getIcons(html:string) {
  const {document} = await parseHTML(html)
  const iconsGrid = await document.querySelector('.if--items-grid-row')
  console.log(iconsGrid)
  // const iconsArray = []
  // for (const icon of iconNodes) {
  //   console.log({icon})
  //   const data = icon.getAttribute('aria-label')

  //   iconsArray.push(data)
  // }
  return iconsGrid
}