<template lang='pug'>
Layout
    v-btn {{$store.state.count}}
</template>

<script lang='coffee'>
import {mapState} from 'vuex'

export default
    mounted: ->
        # {checkout, products, cart} = @$commerce
        # console.log (name for {name} in (await products.list()).data)
        # console.log await cart


        # console.log @$gotrue.signup 'moi@mail.test', 'password'
        
    # computed:
    #     ...mapState [
    #         'count'
    #     ]
</script>