function loadImage(image_name){
    let img = require('@/assets/' + image_name)
    return img
}


const menu_items = [
    {img_src: loadImage('menu/blueberry_ice_cream.jpg') , img_alt: "Blueberry Ice Cream"    , item_name: "Blueberry Ice Cream"  , item_price: "Vnd 50.000"  , tag: "Ice Cream"},
    {img_src: loadImage('menu/chocolate_ice_cream.jpg') , img_alt: "Chocolate Ice Cream"    , item_name: "Chocolate Ice Cream"  , item_price: "Vnd 50.000"  , tag: "Ice Cream"},
    {img_src: loadImage('menu/chocolate_milk.jpg')      , img_alt: "Chocolate Milk"         , item_name: "Chocolate Milk"       , item_price: "Vnd 30.000"  , tag: "Milk"},
    {img_src: loadImage('menu/strawberry_milk.jpg')     , img_alt: "Strawberry Milk"        , item_name: "Strawberry Milk"      , item_price: "Vnd 30.000"  , tag: "Milk"},
    {img_src: loadImage('menu/pasta.jpg')               , img_alt: "Pasta"                  , item_name: "Pasta"                , item_price: "Vnd 50.000"  , tag: "Noodles"},
    {img_src: loadImage('menu/ramen.jpg')               , img_alt: "Ramen"                  , item_name: "Ramen"                , item_price: "Vnd 50.000"  , tag: "Noodles"},
    {img_src: loadImage('menu/fried_rice.jpg')          , img_alt: "Fried Rice"             , item_name: "Fried Rice"           , item_price: "Vnd 30.000"  , tag: "Rice"},
    {img_src: loadImage('menu/sushi.jpg')               , img_alt: "Sushi"                  , item_name: "Sushi"                , item_price: "Vnd 50.000"  , tag: "Rice"},
    {img_src: loadImage('menu/french_fries.jpg')        , img_alt: "French Fries"           , item_name: "French Fries"         , item_price: "Vnd 20.000"  , tag: "Fast Food"},
    {img_src: loadImage('menu/hamburger.jpg')           , img_alt: "Hamburger"              , item_name: "Hamburger"            , item_price: "Vnd 40.000"  , tag: "Fast Food"},
    {img_src: loadImage('menu/kimchi_soup.jpg')         , img_alt: "Kimchi Soup"            , item_name: "Kimchi Soup"          , item_price: "Vnd 50.000"  , tag: "Soup"},
    {img_src: loadImage('menu/thai_coconut_soup.jpg')   , img_alt: "Thai Coconut Soup"      , item_name: "Thai Coconut Soup"    , item_price: "Vnd 50.000"  , tag: "Soup"},
    {img_src: loadImage('menu/peach_tea.jpg')           , img_alt: "Peach Tea"              , item_name: "Peach Tea"            , item_price: "Vnd 20.000"  , tag: "Tea"},
    {img_src: loadImage('menu/lemon_tea.jpg')           , img_alt: "Lemon Tea"              , item_name: "Lemon Tea"            , item_price: "Vnd 20.000"  , tag: "Tea"},
]


const tag_list = [
    {img_src: loadImage('filter/all.png')       , img_alt: "all"        , tag: "All Dishes"},
    {img_src: loadImage('filter/fast_food.png') , img_alt: "fastfood"   , tag: "Fast Food"},
    {img_src: loadImage('filter/rice.png')      , img_alt: "Rice"       , tag: "Rice"},
    {img_src: loadImage('filter/noodles.png')   , img_alt: "noodles"    , tag: "Noodles"},
    {img_src: loadImage('filter/soup.png')      , img_alt: "soup"       , tag: "Soup"},
    {img_src: loadImage('filter/ice_cream.png') , img_alt: "ice_cream"  , tag: "Ice Cream"},
    {img_src: loadImage('filter/milk.png')      , img_alt: "milk"       , tag: "Milk"},
    {img_src: loadImage('filter/tea.png')       , img_alt: "tea"        , tag: "Tea"}
]

export function menuItems(){
    return menu_items
} 

export function tagList(){
    return tag_list
}






