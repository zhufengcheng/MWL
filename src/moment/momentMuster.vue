<template>
    <div class="momentMuster">
        <Form :label-width="120" label-position="right">
            <Row>
                <Col span="24">
                    <FormItem label="日期时间的【 加减等操作 】" :label-width="170">
                        <DatePicker v-model="selectDate" type="datetime" placeholder="选择日期" @on-change="dataChange"
                                    style="width: 100%"></DatePicker>
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span="24">
                    <FormItem label="格式化前时间：">
                        {{selectDate}}
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span="6">
                    <FormItem label="年月日 时分秒：">
                        {{selectDate | dateFormat("YYYY-MM-DD HH:mm:ss")}}
                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem label="年月日：">
                        {{selectDate | dateFormat("YYYY年MM月DD日")}}
                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem label="时分秒：">
                        {{selectDate | dateFormat("HH时mm分ss秒")}}
                    </FormItem>
                </Col>
                <Col span="6">
                    <FormItem label="年月日 时分秒：">
                        {{selectDate | dateFormat("YYYY/MM/DD HH:mm:ss")}}
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span="5">
                    <h2>加法（Add）</h2>
                </Col>
                <Col span="5">
                    <h2>减法（Subtract）</h2>
                </Col>
                <Col span="14">
                    <h2>开始时间（startOf）And 结束时间(endOf)</h2>
                </Col>
            </Row>
            <Row>
                <Col span="5">
                    <FormItem label="加 1 年：">
                        {{addTimeYears1 | dateFormat("YYYY-MM-DD")}}
                    </FormItem>
                </Col>
                <Col span="5">
                    <FormItem label="减 1 年：">
                        {{subtractTimeYears1 | dateFormat("YYYY-MM-DD")}}
                    </FormItem>
                </Col>
                <Col span="14">
                    <FormItem label="今年1月第一天：" :label-width="170">
                        {{startAndEndYear}}
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span="5">
                    <FormItem label="加 1 月：">
                        {{addTimeMonths1 | dateFormat("YYYY-MM-DD")}}
                    </FormItem>
                </Col>
                <Col span="5">
                    <FormItem label="减 1 月：">
                        {{subtractTimeMonths1 | dateFormat("YYYY-MM-DD")}}
                    </FormItem>
                </Col>
                <Col span="14">
                    <FormItem label="本月第一天：" :label-width="170">
                        {{startAndEndMonth}}
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span="5">
                    <FormItem label="加 3 月：">
                        {{addTimeQuarters1 | dateFormat("YYYY-MM-DD")}}
                    </FormItem>
                </Col>
                <Col span="5">
                    <FormItem label="减 3 月：">
                        {{subtractTimeQuarters1 | dateFormat("YYYY-MM-DD")}}
                    </FormItem>
                </Col>
                <Col span="14">
                    <FormItem label="本季度第一个月第一天：" :label-width="170">
                        {{startAndEndQuarter}}
                    </FormItem>
                </Col>

            </Row>
            <Row>
                <Col span="5">
                    <FormItem label="加 1 周：">
                        {{addTimeWeeks1 | dateFormat("YYYY-MM-DD")}}
                    </FormItem>
                </Col>
                <Col span="5">
                    <FormItem label="减 1 周：">
                        {{subtractTimeWeeks1 | dateFormat("YYYY-MM-DD")}}
                    </FormItem>
                </Col>
                <Col span="14">
                    <FormItem label="本周第一天：" :label-width="170">
                        {{startAndEndWeek}}
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span="5">
                    <FormItem label="加 1 日：">
                        {{addTimeHours | dateFormat("YYYY-MM-DD")}}
                    </FormItem>
                </Col>
                <Col span="5">
                    <FormItem label="减 1 日：">
                        {{subtractTimeHours | dateFormat("YYYY-MM-DD")}}
                    </FormItem>
                </Col>
                <Col span="14">
                    <FormItem label="ISO本周的第一天：" :label-width="170">
                        {{startAndEndIsoWeek}}
                    </FormItem>
                </Col>
            </Row>

            <Row>
                <Col span="5">
                    <FormItem label="加 1 时：">
                        {{addTimeHours | dateFormat("HH:mm:ss")}}
                    </FormItem>
                </Col>
                <Col span="5">
                    <FormItem label="减 1 时：">
                        {{subtractTimeHours | dateFormat("HH:mm:ss")}}
                    </FormItem>
                </Col>
                <Col span="14">
                    <FormItem label="今天的 12:00：" :label-width="170">
                        {{startAndEndDay}}
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span="5">
                    <FormItem label="加 1 分：">
                        {{addTimeMinutes | dateFormat("HH:mm:ss")}}
                    </FormItem>
                </Col>
                <Col span="5">
                    <FormItem label="减 1 分：">
                        {{subtractTimeMinutes | dateFormat("HH:mm:ss")}}
                    </FormItem>
                </Col>
                <Col span="14">
                    <FormItem label="当前时间的小时，0分0秒0毫秒：" :label-width="170">
                        {{startAndEndHour}}
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span="5">
                    <FormItem label="加 1 秒：">
                        {{addTimeSeconds | dateFormat("HH:mm:ss")}}
                    </FormItem>
                </Col>
                <Col span="5">
                    <FormItem label="减 1 秒：">
                        {{subtractTimeSeconds | dateFormat("HH:mm:ss")}}
                    </FormItem>
                </Col>
                <Col span="14">
                    <FormItem label="当前的时间的分钟，according：" :label-width="170">
                        {{startAndEndMinute}}
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span="5">
                    <FormItem label="加 2000 毫秒：">
                        {{addTimeMilliseconds | dateFormat("HH:mm:ss")}}
                    </FormItem>
                </Col>
                <Col span="5">
                    <FormItem label="减 2000 毫秒：">
                        {{subtractTimeMilliseconds | dateFormat("HH:mm:ss")}}
                    </FormItem>
                </Col>
                <Col span="14">
                    <FormItem label="类似 moment().milliseconds(0)：" :label-width="170">
                        {{startAndEndSecond}}
                    </FormItem>
                </Col>
            </Row>

            <Row>
                <Col span="5">
                    <FormItem label="链式加 1月7日">
                        {{addDaysAndMonths | dateFormat("YYYY-MM-DD")}}
                    </FormItem>
                </Col>
                <Col span="5">
                    <FormItem label="链式减 1月7日">
                        {{subtractDaysAndMonths | dateFormat("YYYY-MM-DD")}}
                    </FormItem>
                </Col>
            </Row>
        </Form>
        <documentTemplate :dataTable="dataTableList"></documentTemplate>
    </div>
</template>

<script>
    import moment from "moment";
    import documentTemplate from  "../components/documentTemplate"
    export default {
        name: 'momentMuster',
        components: {
            documentTemplate
        },
        data() {
            return {
                selectDate: new Date(),
                addTimeDays1:new Date(), // 加 1 日
                addTimeYears1:new Date(), // 加 1 年
                addTimeQuarters1:new Date(), // 加 3 月
                addTimeMonths1:new Date(), // 加 1 月
                addTimeWeeks1:new Date(), // 加 1 周
                addTimeHours:new Date(), // 加 1 时
                addTimeMinutes:new Date(), // 加 1 分
                addTimeSeconds:new Date(), // 加 1 秒
                addTimeMilliseconds:new Date(), // 加 1 毫秒
                addDaysAndMonths:new Date(), // 减 7天1月
                subtractTimeDays1:new Date(), // 减 1 日
                subtractTimeYears1:new Date(), // 减 1 年
                subtractTimeQuarters1:new Date(), // 减 3 月
                subtractTimeMonths1:new Date(), // 减 1 月
                subtractTimeWeeks1:new Date(), // 减 1 周
                subtractTimeHours:new Date(), // 减 1 时
                subtractTimeMinutes:new Date(), // 减 1 分
                subtractTimeSeconds:new Date(), // 减 1 秒
                subtractTimeMilliseconds:new Date(), // 减 1 毫秒
                subtractDaysAndMonths:new Date(), // 减 7天1月
                startAndEndYear: new Date(), // 今年1月第一天
                startAndEndMonth:new Date(), // 本月第一天
                startAndEndQuarter:new Date(), // 本季度第一个月第一天
                startAndEndWeek :new Date(),// 本周第一天
                startAndEndIsoWeek:new Date(),// ISO本周的第一天
                startAndEndDay:new Date(),// 今天的 12:00
                startAndEndHour:new Date(),// 当前时间的小时，0分0秒0毫秒
                startAndEndMinute:new Date(), // 当前的时间的分钟，according
                startAndEndSecond:new Date(),// 类似 moment().milliseconds(0)
                dataTableList:[
                    {
                        source: 'Moment.js',
                        address: 'http://momentjs.cn/',
                        appliance:'PC',
                        name: '日期格式化组件'
                    },
                    {
                        source: 'IT 笔录',
                        address: 'https://itbilu.com/nodejs/npm/EJlmbFhgg.html',
                        appliance:'PC',
                        name: '日期格式化组件'
                    },
                    {
                        source: 'segmentFault',
                        address: 'https://segmentfault.com/a/1190000015240911',
                        appliance:'PC',
                        name: '日期格式化组件'
                    }
                ]
            }
        },
        methods: {
            dataChange(time) {
                this.addTimeDays1 = moment(time).add(1, 'days') // 简写 moment(time).add(1, 'd');
                this.addTimeYears1 = moment(time).add(1, 'years') // 简写 moment(time).add(1, 'y');
                this.addTimeQuarters1 = moment(time).add(1, 'Q') // 简写 moment(time).add(1, 'quarters');
                this.addTimeMonths1 = moment(time).add(1, 'M') // 简写 moment(time).add(1, 'addTimeMonths1');
                this.addTimeWeeks1 = moment(time).add(1, 'w') // 简写 moment(time).add(1, 'weeks');
                this.addTimeHours = moment(time).add(1, 'h') // 简写 moment(time).add(1, 'hours');
                this.addTimeMinutes = moment(time).add(1, 'm') // 简写 moment(time).add(1, 'minutes');
                this.addTimeSeconds = moment(time).add(1, 's') // 简写 moment(time).add(1, 'seconds');
                this.addTimeMilliseconds = moment(time).add(2000, 'ms') // 简写 moment(time).add(1, 'milliseconds');
                this.addDaysAndMonths = moment(time).add(7, 'days').add(1, 'months'); // 方法链实现


                this.subtractTimeDays1 = moment(time).subtract(1, 'days') // 简写 moment(time).subtract(1, 'd');
                this.subtractTimeYears1 = moment(time).subtract(1, 'years') // 简写 moment(time).subtract(1, 'y');
                this.subtractTimeQuarters1 = moment(time).subtract(1, 'Q') // 简写 moment(time).subtract(1, 'quarters');
                this.subtractTimeMonths1 = moment(time).subtract(1, 'M') // 简写 moment(time).subtract(1, 'addTimeMonths1');
                this.subtractTimeWeeks1 = moment(time).subtract(1, 'w') // 简写 moment(time).subtract(1, 'weeks');
                this.subtractTimeHours = moment(time).subtract(1, 'h') // 简写 moment(time).subtract(1, 'hours');
                this.subtractTimeMinutes = moment(time).subtract(1, 'm') // 简写 moment(time).subtract(1, 'minutes');
                this.subtractTimeSeconds = moment(time).subtract(1, 's') // 简写 moment(time).subtract(1, 'seconds');
                this.subtractTimeMilliseconds = moment(time).subtract(2000, 'ms') // 简写 moment(time).subtract(1, 'milliseconds');
                this.subtractDaysAndMonths = moment(time).subtract(7, 'days').subtract(1, 'months'); // 方法链实现

                this.startAndEndYear = this.startOfAndEndOf(moment(time).startOf('year'),moment(time).startOf('year')) // 今年1月第一天
                this.startAndEndMonth = this.startOfAndEndOf(moment(time).startOf('month'),moment(time).startOf('month')) // 本月第一天
                this.startAndEndQuarter = this.startOfAndEndOf(moment(time).startOf('quarter'),moment(time).startOf('quarter')) // 本季度第一个月第一天

                this.startAndEndWeek = this.startOfAndEndOf(moment(time).startOf('week'),moment(time).startOf('week')) // 本周第一天
                this.startAndEndIsoWeek = this.startOfAndEndOf(moment(time).startOf('isoWeek'),moment(time).startOf('isoWeek')) // ISO本周的第一天
                this.startAndEndDay = this.startOfAndEndOf(moment(time).startOf('day'),moment(time).startOf('day')) // 今天的 12:00
                this.startAndEndHour = this.startOfAndEndOf(moment(time).startOf('hour'),moment(time).startOf('hour')) // 当前时间的小时，0分0秒0毫秒
                this.startAndEndMinute = this.startOfAndEndOf(moment(time).startOf('minute'),moment(time).startOf('minute')) // 当前的时间的分钟，according
                this.startAndEndSecond = this.startOfAndEndOf(moment(time).startOf('second'),moment(time).startOf('second')) // 类似 moment().milliseconds(0);
            },
            startOfAndEndOf(startYear,endYear){
                return "某一时间的单位的起始时间 "+(startYear).format("YYYY/MM/DD HH:mm:ss")+"结束时间"+(endYear).format("YYYY/MM/DD HH:mm:ss")
            }

        }
    }
</script>
<style scoped>
    .momentMuster .ivu-form-item{
        margin-bottom: 0!important;
    }
    .momentMuster .ivu-col{
        text-align: left!important;
    }
</style>
