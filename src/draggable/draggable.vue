<template>
  <div class="row">
    <Row type="flex" justify="end" :gutter="10">
      <Col span="12" style="border-right:1px solid #ccc">
        <h3>Draggable 1</h3>
        <Row type="flex" justify="end" :gutter="10">
            <Col span="8">中文</Col>
            <Col span="8">英文</Col>
            <Col span="8">其它</Col>
        </Row>
        <draggable class="list-group" :list="list1" group="people" @change="log">
            
            <Row class="list-group-item" v-for="(element, index) in list1" :key="element.name" type="flex" justify="end" :gutter="10" style="margin-top:8px">
                <Col span="8"><Input v-model="element.name" placeholder="请输入中文"></Input></Col>
                <Col span="8"><Input v-model="index" placeholder="请输入英文"></Input></Col>
                <Col span="8"><Input v-model="element.age" placeholder="请输入其它"></Input></Col>
            </Row>
        </draggable>
      </Col>
      <Col span="12">
        <h3>Draggable 2</h3>
        <Row type="flex" justify="end" :gutter="10">
            <Col span="8">中文</Col>
            <Col span="8">英文</Col>
            <Col span="8">其它</Col>
        </Row>
        <draggable class="list-group" :list="list2" group="people" @change="log">
          <Row class="list-group-item" v-for="(element, index) in list2" :key="element.name" type="flex" justify="end" :gutter="10" style="margin-top:8px">
                <Col span="8"><Input v-model="element.name" placeholder="请输入中文" disabled></Input></Col>
                <Col span="8"><Input v-model="index" placeholder="请输入英文" disabled></Input></Col>
                <Col span="8"><Input v-model="element.age" placeholder="请输入其它" disabled></Input></Col>
            </Row>
        </draggable>
      </Col>
    </Row>

    <!-- <rawDisplayer class="col-3" :value="list1" title="List 1" /> -->

    <!-- <rawDisplayer class="col-3" :value="list2" title="List 2" /> -->
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      list1: [
        { name: "John", id: 1, age: 11 },
        { name: "Joao", id: 2, age: 22 },
        { name: "Jean", id: 3, age: 33 },
        { name: "Gerard", id: 4, age: 44 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ]
    };
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    }
  }
};
</script>