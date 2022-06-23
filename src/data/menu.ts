/* eslint-disable no-bitwise */
/* eslint-disable no-param-reassign */
const pngs = import.meta.globEager('/src/assets/images/*.png')
export const menu =  [
  {
    id:1,
    name:"研发设计",
    icon:pngs["/src/assets/images/组 9394.png"].default,
  },
  {
    id:2,
    name:"生产制造",
    icon:pngs["/src/assets/images/路径 15700.png"].default,
  },
  {
    id:3,
    name:"运营管理",
    icon:pngs["/src/assets/images/组 9395.png"].default,
  },
  {
    id:4,
    name:"供应采购",
    icon:pngs["/src/assets/images/组 9396.png"].default,
  },
  {
    id:5,
    name:"仓储物流",
    icon:pngs["/src/assets/images/组 9397.png"].default,
  },
  {
    id:6,
    name:"运维服务",
    icon:pngs["/src/assets/images/组 9398.png"].default,
  },
  {
    id:7,
    name:"信息安全",
    icon:pngs["/src/assets/images/路径 15710.png"].default,
  },
  {
    id:8,
    name:"财务管理",
    icon:pngs["/src/assets/images/路径 15711.png"].default,
  },
    {
    id:9,
    name:"办公管理",
    icon:pngs["/src/assets/images/路径 15712.png"].default,
  },
]
export default menu;
