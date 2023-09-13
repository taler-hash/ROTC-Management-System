<template>
    <div>Dashboard Page</div>
</template>
<script>
export default{
    beforeMount(){
        console.log($cookies.get('rotcToken'))
    }
}
</script>