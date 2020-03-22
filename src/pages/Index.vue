<template lang='pug'>
Layout
    
</template>

<script lang='coffee'>
export default
    mounted: ->
        {checkout, products, cart} = @$commerce
        console.log (name for {name} in (await products.list()).data)
        console.log await cart
</script>