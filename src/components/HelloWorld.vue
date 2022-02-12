<!--<template>-->
<!--  <div class="hello">-->

<!--  </div>-->
  <template>
    <el-container style=" border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

        <el-menu
                :default-openeds="['0', '1']"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
        >
          <!-- 遍历生成父菜单选项-->
          <template v-for="menu in menus">
            <el-sub-menu
                    v-if="menu.subMenus && menu.subMenus.length"
                    :index="menu.index"
                    :key="menu.index"
                    >
                <template #title>
                  <i :class="menu.icon"></i>
                  <span >{{menu.text}}</span>
                </template>
                <el-menu-item-group>

                  <el-menu-item
                        v-for="subMenu in menu.subMenus"
                        :key="subMenu.index"
                        :index="subMenu.index"
                        >{{subMenu.text}}
                  </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>

            <el-menu-item
                    v-else :index="menu.index"
                    :key="menu.index">
                <i :class="menu.icon"></i>
                <span>{{menu.text}}</span>
            </el-menu-item>
          </template>


        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <el-icon style="margin-right: 15px"><setting /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </el-header>

        <el-main>
          <el-table
                  stripe
                  :data="tableData"
                  style="border: 1px solid #ebebeb;border-radius: 3px;margin-top: 10px"
          >
            <el-table-column prop="id" label="id" width="100"></el-table-column>
            <el-table-column prop="data" label="日期" width="200"></el-table-column>
            <el-table-column prop="name" label="姓名" width="200"> </el-table-column>
            <el-table-column prop="phone" label="电话" width="200"> </el-table-column>
            <el-table-column prop="address" label="地址" width="200"> </el-table-column>
            <el-table-column fixed="right" label="操作" width="300">
                <template >
                  <el-button
                    @click="deleteTableItem(scope.row.id)"
                    type="danger"
                    size="small"
                    >删除</el-button>
                </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </template>



<!--</template>-->

<script>
  const menus = [
    {
      text: "服务管理",  //父菜单名
      icon: "el-icon-setting",
      subMenus: [{ text: "服务信息"},{text: "新增"}] //子菜单列表
    } ,
    {
      text: "产品管理",
      icon: "el-icon-menu",
      subMenus: [{ text: "产品信息"}]
    },
    {
      text: "日志信息",
      icon: "el-icon-message",

    }

  ].map((x, i) => {
    return {
      ...x,
      // 子菜单就拼接${父菜单index}-${子菜单index}
      subMenus: (x.subMenus || []).map((y, j) => {
        return { ...y, index: `${i}-${j}` };
      }),
      // 父菜单就把 index 加上好了
      index: `${i}`
    };
  });
  const tableItem = {
    date: "2021-12-03",
    name: "Aomori",
    phont:"12345678910",
    address : "xxx-xxx-xxx-xxx"
  };
  const tableData = Array(20)
          .fill(tableItem)
          .map((x,i) =>{
            return {id: i+1,...x};
          });
  console.log(tableData[1]);

  export default {
    name: "HelloWorld",
    data(){
      return{
        menus:menus,
        tableData:tableData
      };
    },
    methods:{
      //新增一个数据
      addtableItem(item={}){
        // data created into the list and  id created by itself
        this.tableData.push({...item,id: this.tableData.length + 1})
      },
      //删除一个数据
      deleteTableItem(id){
        //查找到对应的索引，然后删除
        const index = this.tableData.findIndex(x => x.id ===id);
        this.tableData.splice(index,1);
      },
      //移动一个数据
      moveTableItem(id,direction){
        const dataLength = this.tableData.length;
        //查找对应的索引然后取出，再插入
        const index = this.tableData.findIndex(x =>x.id === id);
        switch (direction) {
                //上移动
          case "up":
            if(index>0){
              //第一个不进行上移
              const item = this.tableData.splice(index,1)[0];
              this.tableData.splice(index - 1,0,item);
            }
            break;
          case "down":
            if(index < dataLength - 1){
              //最后一个不进行下移
              const item = this.tableData.splice(index,1)[0];
              this.tableData.splice(index + 1,0,item);
            }
            break;

        }

      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

