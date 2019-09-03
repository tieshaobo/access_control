
<script>
export default {
  name:'About',
  props:{
    id:{
      type:Number,
      default:2
    }
  },
  render(){
    let Tag =`h${this.id}`;
    return <Tag>天天向上</Tag>
  }
}
</script>
