<template>
    <div :class="$style.home">
        <div :class="$style.menu">
            <!-- bungkusan nav log,judul dan sub judul -->
            <div :class="$style.tab">
                <div :class="$style.tab1">
                    <div :class="$style.gantt">Production Schedule</div>
                </div>
                <div :class="$style.tab3" @click="openReport">
                    <div :class="$style.div">Report</div>
                    <img :class="$style.chevronDownIcon" alt="" src="" />
                </div>
            </div>
        </div>
        <!-- tab halaman  -->
        <div :class="$style.tabLegend">
            <div :class="$style.tab5">
                <div :class="$style.tabGantt">
                    <img :class="$style.ganttIcon" alt="" src="" />
                    <div :class="$style.gantt">Gantt</div>
                </div>
                <div :class="$style.tabList" @click="onTabListClick">
                    <img :class="$style.listIcon" alt="" src="" />
                    <div :class="$style.gantt">List</div>
                </div>
                <div :class="$style.tabList" @click="onTabListClick">
                    <img :class="$style.listIcon" alt="" src="" />
                    <div :class="$style.gantt">Calendar</div>
                </div>
            </div>
            <div :class="$style.filterWrapper">
                <div :class="$style.filter">
                    <div :class="$style.buttonWithIcon" @click="openReport">
                        <img :class="$style.ganttIcon" alt="" src="" />
                        <div :class="$style.report">Report</div>
                    </div>
                    <div :class="$style.buttonWithIcon1">
                        <img :class="$style.ganttIcon" alt="" src="" />
                        <div :class="$style.report">Full Screen</div>
                    </div>
                    <div :class="$style.july2024">10 - 25 July 2024</div>
                </div>
            </div>
        </div>
        <div :class="$style.lastUpdate18">Last Update, 18 July 2024, 14.00</div>
        <div :class="$style.tabLegend1">
            <!-- legend  -->
            <div :class="$style.filter">
                <div :class="$style.buttonWithIcon2" @click="openModalAddSchedule">
                    <img :class="$style.listIcon" alt="" src="" />
                    <div :class="$style.report">Add Schedule</div>
                </div>
                <div :class="$style.buttonWithIcon" @click="openFilterSchedule">
                    <img :class="$style.ganttIcon" alt="" src="" />
                    <div :class="$style.report">Filter</div>
                </div>
                <div :class="$style.buttonWithIcon" @click="openCalendarTo">
                    <img :class="$style.listIcon" alt="" src="" />
                    <div :class="$style.report">Date</div>
                </div>
                <div :class="$style.form" @click="openDropdownRangeHours" />
                <div :class="$style.rangeTimePer12Jam">
                    <div :class="$style.buttonWithIcon5" @click="onTabListClick">
                        <img :class="$style.listIcon" alt="" src="" />
                    </div>
                    <div :class="$style.persentage" @click="onTabListClick">
                        <div :class="$style.div">100</div>
                        <div :class="$style.div">%</div>
                    </div>
                    <div :class="$style.buttonWithIcon5" @click="onTabListClick">
                        <img :class="$style.listIcon" alt="" src="" />
                    </div>
                </div>
            </div>
            <!-- legend filter -->
            <div :class="$style.legend">
                <div :class="$style.filter">
                    <div :class="$style.frameChild" />
                    <div :class="$style.gantt">Preparation</div>
                </div>
                <div :class="$style.filter">
                    <div :class="$style.frameItem" />
                    <div :class="$style.gantt">Planning</div>
                </div>
                <div :class="$style.filter">
                    <div :class="$style.frameInner" />
                    <div :class="$style.gantt">BOM</div>
                </div>
                <div :class="$style.filter">
                    <div :class="$style.rectangleDiv" />
                    <div :class="$style.gantt">Kitting</div>
                </div>
                <div :class="$style.filter">
                    <div :class="$style.frameChild1" />
                    <div :class="$style.gantt">Issue</div>
                </div>
                <div :class="$style.filter">
                    <div :class="$style.frameChild2" />
                    <div :class="$style.gantt">Model Change</div>
                </div>
                <div :class="$style.filter">
                    <div :class="$style.frameChild3" />
                    <div :class="$style.gantt">Production</div>
                </div>
                <div :class="$style.rectangleParent4">
                    <div :class="$style.frameChild4" />
                    <div :class="$style.gantt">Cancel</div>
                </div>
                <div :class="$style.filter">
                    <div :class="$style.frameChild5" />
                    <div :class="$style.gantt">Complete</div>
                </div>
            </div>
        </div>
        <!-- bungkusan nav user and avatar pic  -->
        <div :class="$style.masterDataDropdownheader">
            <div :class="$style.logoAndMenu">
                <img :class="$style.ganttIcon" alt="" src="" />
                <div :class="$style.logoPlantMaintenance">
                    <img :class="$style.logoIcon" alt="" src="" />
                    <div :class="$style.coraPlatformParent">
                        <b :class="$style.coraPlatform">Cora Platform</b>
                        <div :class="$style.advanceProductionSchedulling">Advance Production Schedulling</div>
                    </div>
                </div>
            </div>
            <div :class="$style.profilSection" @click="openReport1">
                <div :class="$style.profil">
                    <div :class="$style.namaSectionParent">
                        <div :class="$style.namaSection">
                            <div :class="$style.nama">Joko Siyanto</div>
                            <div :class="$style.nama">-</div>
                            <div :class="$style.nama">Production</div>
                        </div>
                        <img :class="$style.fotoIcon" alt="" src="" />
                    </div>
                    <img :class="$style.ganttIcon" alt="" src="" />
                </div>
            </div>
        </div>
        <!-- table -->
        <div :class="$style.ganttChartInfo">
            <div :class="$style.ganttChart">
                <div :class="$style.schedule">
                    <div :class="$style.planning1">
                        <div :class="$style.dailyPlanning">
                            <div :class="$style.jamTanggalPlanning">
                                <div :class="$style.tanggal">
                                    <div :class="$style.mon01July">Wed, 17 Jul 2024</div>
                                </div>
                                <div :class="$style.jam">
                                    <div :class="$style.div2">
                                        <div :class="$style.div">6</div>
                                    </div>
                                    <div :class="$style.div4">
                                        <div :class="$style.div">12</div>
                                    </div>
                                    <div :class="$style.div2">
                                        <div :class="$style.div">18</div>
                                    </div>
                                    <div :class="$style.div4">
                                        <div :class="$style.div">24</div>
                                    </div>
                                </div>
                            </div>
                            <div :class="$style.planning2">
                                <div :class="$style.div10" />
                                <div :class="$style.div11" />
                                <div :class="$style.div10" />
                                <div :class="$style.div11" />
                            </div>
                        </div>
                        <div :class="$style.dailyPlanning">
                            <div :class="$style.jamTanggalPlanning">
                                <div :class="$style.tanggal">
                                    <div :class="$style.mon01July">Thu, 18 Jul 2024</div>
                                </div>
                                <div :class="$style.jam">
                                    <div :class="$style.div2">
                                        <div :class="$style.div">6</div>
                                    </div>
                                    <div :class="$style.div4">
                                        <div :class="$style.div">12</div>
                                    </div>
                                    <div :class="$style.div2">
                                        <div :class="$style.div">18</div>
                                    </div>
                                    <div :class="$style.div4">
                                        <div :class="$style.div">24</div>
                                    </div>
                                </div>
                            </div>
                            <div :class="$style.planning2">
                                <div :class="$style.div10" />
                                <div :class="$style.div11" />
                                <div :class="$style.div10" />
                                <div :class="$style.div11" />
                            </div>
                        </div>
                        <div :class="$style.dailyPlanning">
                            <div :class="$style.jamTanggalPlanning">
                                <div :class="$style.tanggal">
                                    <div :class="$style.mon01July">Fri, 19 Jul 2024</div>
                                </div>
                                <div :class="$style.jam">
                                    <div :class="$style.div2">
                                        <div :class="$style.div">6</div>
                                    </div>
                                    <div :class="$style.div4">
                                        <div :class="$style.div">12</div>
                                    </div>
                                    <div :class="$style.div2">
                                        <div :class="$style.div">18</div>
                                    </div>
                                    <div :class="$style.div4">
                                        <div :class="$style.div">24</div>
                                    </div>
                                </div>
                            </div>
                            <div :class="$style.planning2">
                                <div :class="$style.div10" />
                                <div :class="$style.div11" />
                                <div :class="$style.div10" />
                                <div :class="$style.div11" />
                            </div>
                        </div>
                        <div :class="$style.dailyPlanning3">
                            <div :class="$style.jamTanggalPlanning">
                                <div :class="$style.tanggal3">
                                    <div :class="$style.mon01July">Sat, 20 Jul 2024</div>
                                </div>
                                <div :class="$style.jam3">
                                    <div :class="$style.div2">
                                        <div :class="$style.div">6</div>
                                    </div>
                                    <div :class="$style.div4">
                                        <div :class="$style.div">12</div>
                                    </div>
                                    <div :class="$style.div2">
                                        <div :class="$style.div">18</div>
                                    </div>
                                    <div :class="$style.div4">
                                        <div :class="$style.div">24</div>
                                    </div>
                                </div>
                            </div>
                            <div :class="$style.planning2">
                                <div :class="$style.div10" />
                                <div :class="$style.div11" />
                                <div :class="$style.div10" />
                                <div :class="$style.div11" />
                            </div>
                        </div>
                        <div :class="$style.dailyPlanning3">
                            <div :class="$style.jamTanggalPlanning">
                                <div :class="$style.tanggal3">
                                    <div :class="$style.mon01July">Sun, 21 Jul 2024</div>
                                </div>
                                <div :class="$style.jam3">
                                    <div :class="$style.div2">
                                        <div :class="$style.div">6</div>
                                    </div>
                                    <div :class="$style.div4">
                                        <div :class="$style.div">12</div>
                                    </div>
                                    <div :class="$style.div2">
                                        <div :class="$style.div">18</div>
                                    </div>
                                    <div :class="$style.div4">
                                        <div :class="$style.div">24</div>
                                    </div>
                                </div>
                            </div>
                            <div :class="$style.planning2">
                                <div :class="$style.div10" />
                                <div :class="$style.div11" />
                                <div :class="$style.div10" />
                                <div :class="$style.div11" />
                            </div>
                        </div>
                        <div :class="$style.dailyPlanning">
                            <div :class="$style.jamTanggalPlanning">
                                <div :class="$style.tanggal">
                                    <div :class="$style.mon01July">Mon, 22 Jul 2024</div>
                                </div>
                                <div :class="$style.jam">
                                    <div :class="$style.div2">
                                        <div :class="$style.div">6</div>
                                    </div>
                                    <div :class="$style.div4">
                                        <div :class="$style.div">12</div>
                                    </div>
                                    <div :class="$style.div2">
                                        <div :class="$style.div">18</div>
                                    </div>
                                    <div :class="$style.div4">
                                        <div :class="$style.div">24</div>
                                    </div>
                                </div>
                            </div>
                            <div :class="$style.planning2">
                                <div :class="$style.div10" />
                                <div :class="$style.div11" />
                                <div :class="$style.div10" />
                                <div :class="$style.div11" />
                            </div>
                        </div>
                        <div :class="$style.dailyPlanning">
                            <div :class="$style.jamTanggalPlanning">
                                <div :class="$style.tanggal">
                                    <div :class="$style.mon01July">Tue, 23 Jul 2024</div>
                                </div>
                                <div :class="$style.jam">
                                    <div :class="$style.div2">
                                        <div :class="$style.div">6</div>
                                    </div>
                                    <div :class="$style.div4">
                                        <div :class="$style.div">12</div>
                                    </div>
                                    <div :class="$style.div2">
                                        <div :class="$style.div">18</div>
                                    </div>
                                    <div :class="$style.div4">
                                        <div :class="$style.div">24</div>
                                    </div>
                                </div>
                            </div>
                            <div :class="$style.planning2">
                                <div :class="$style.div10" />
                                <div :class="$style.div11" />
                                <div :class="$style.div10" />
                                <div :class="$style.div11" />
                            </div>
                        </div>
                        <div :class="$style.dailyPlanning">
                            <div :class="$style.jamTanggalPlanning">
                                <div :class="$style.tanggal">
                                    <div :class="$style.mon01July">Mon, 01 July 2024</div>
                                </div>
                                <div :class="$style.jam">
                                    <div :class="$style.div2">
                                        <div :class="$style.div">6</div>
                                    </div>
                                    <div :class="$style.div4">
                                        <div :class="$style.div">12</div>
                                    </div>
                                    <div :class="$style.div2">
                                        <div :class="$style.div">18</div>
                                    </div>
                                    <div :class="$style.div4">
                                        <div :class="$style.div">24</div>
                                    </div>
                                </div>
                            </div>
                            <div :class="$style.planning2">
                                <div :class="$style.div10" />
                                <div :class="$style.div11" />
                                <div :class="$style.div10" />
                                <div :class="$style.div11" />
                            </div>
                        </div>
                        <div :class="$style.dailyPlanning">
                            <div :class="$style.jamTanggalPlanning">
                                <div :class="$style.tanggal">
                                    <div :class="$style.mon01July">Mon, 01 July 2024</div>
                                </div>
                                <div :class="$style.jam">
                                    <div :class="$style.div2">
                                        <div :class="$style.div">6</div>
                                    </div>
                                    <div :class="$style.div4">
                                        <div :class="$style.div">12</div>
                                    </div>
                                    <div :class="$style.div2">
                                        <div :class="$style.div">18</div>
                                    </div>
                                    <div :class="$style.div4">
                                        <div :class="$style.div">24</div>
                                    </div>
                                </div>
                            </div>
                            <div :class="$style.planning2">
                                <div :class="$style.div10" />
                                <div :class="$style.div11" />
                                <div :class="$style.div10" />
                                <div :class="$style.div11" />
                            </div>
                        </div>
                    </div>
                    <div :class="$style.planning11">
                        <div :class="$style.listSchedulePlanning">
                            <div :class="$style.schedule1">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 4 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">Completed</div>
                                </div>
                            </div>
                            <div :class="$style.schedule2" @click="openListRightClick">
                                <div :class="$style.scheduleItem" />
                                <div :class="$style.frameGroup">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 3 #3</div>
                                </div>
                                <div :class="$style.scheduleInner" />
                                <div :class="$style.productionParent">
                                    <div :class="$style.div">Production</div>
                                    <div :class="$style.div">
                                        <span>Qty 2.314/5.000 </span>
                                        <span :class="$style.span">(50%)</span>
                                    </div>
                                </div>
                            </div>
                            <div :class="$style.schedule3" @click="openListRightClick1">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 3 #1</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Issue</div>
                                </div>
                            </div>
                            <div :class="$style.schedule4">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 2 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">BOM</div>
                                </div>
                            </div>
                            <div :class="$style.schedule5">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 3 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Modul Change</div>
                                </div>
                            </div>
                            <div :class="$style.schedule6" @click="openListRightClick2">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Planning</div>
                                </div>
                            </div>
                            <div :class="$style.schedule7">
                                <div :class="$style.scheduleItem" />
                                <div :class="$style.frameGroup">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 3 #3</div>
                                </div>
                                <div :class="$style.scheduleInner" />
                                <div :class="$style.productionParent">
                                    <div :class="$style.div">Production</div>
                                    <div :class="$style.div">
                                        <span>Qty 2.314/5.000 </span>
                                        <span :class="$style.span">(50%)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div :class="$style.frameParent5">
                            <div :class="$style.xm2024070501Parent">
                                <div :class="$style.div">XM20240705-01</div>
                                <div :class="$style.production3">Production</div>
                            </div>
                            <div :class="$style.schedule8">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #1</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">Preparation</div>
                                </div>
                            </div>
                            <div :class="$style.schedule9">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Planning</div>
                                </div>
                            </div>
                        </div>
                        <div :class="$style.scheduleParent">
                            <div :class="$style.schedule10">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Planning</div>
                                </div>
                            </div>
                            <div :class="$style.schedule8">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #1</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">Preparation</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="$style.planning15">
                        <div :class="$style.listSchedulePlanning">
                            <div :class="$style.schedule12">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 4 #1</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">Cancel </div>
                                </div>
                            </div>
                            <div :class="$style.schedule13" @click="openListRightClick3">
                                <div :class="$style.scheduleItem" />
                                <div :class="$style.frameGroup">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 3 #3</div>
                                </div>
                                <div :class="$style.scheduleInner" />
                                <div :class="$style.productionParent">
                                    <div :class="$style.div">Production</div>
                                    <div :class="$style.div">
                                        <span>Qty 3.850/5.000 </span>
                                        <span :class="$style.span">(77%)</span>
                                    </div>
                                </div>
                            </div>
                            <div :class="$style.xm2024070501Parent">
                                <div :class="$style.div">XM20240705-01</div>
                                <div :class="$style.production3">Production</div>
                            </div>
                            <div :class="$style.schedule14" @click="openScheduleDetails">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 2 #3</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Kitting</div>
                                </div>
                            </div>
                            <div :class="$style.schedule6" @click="openScheduleDetails">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Planning</div>
                                </div>
                            </div>
                        </div>
                        <div :class="$style.frameParent14">
                            <div :class="$style.xm2024070501Parent1">
                                <div :class="$style.div">XM20240705-01</div>
                                <div :class="$style.production3">Production</div>
                            </div>
                            <div :class="$style.schedule16">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Planning</div>
                                </div>
                            </div>
                            <div :class="$style.schedule17">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #1</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">Preparation</div>
                                </div>
                            </div>
                            <div :class="$style.xm2024070501Parent1">
                                <div :class="$style.div">XM20240705-01</div>
                                <div :class="$style.production3">Production</div>
                            </div>
                        </div>
                        <div :class="$style.scheduleParent">
                            <div :class="$style.schedule6" @click="openScheduleDetails">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Planning</div>
                                </div>
                            </div>
                            <div :class="$style.schedule8">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #1</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">Preparation</div>
                                </div>
                            </div>
                        </div>
                        <div :class="$style.processList">
                            <div :class="$style.komponenTabel">
                                <div :class="$style.cellData">SMT-A</div>
                            </div>
                            <div :class="$style.komponenTabel1">
                                <div :class="$style.cellData">ASSEMBLY</div>
                            </div>
                            <div :class="$style.komponenTabel2">
                                <div :class="$style.cellData2">2</div>
                            </div>
                            <div :class="$style.komponenTabel3">
                                <div :class="$style.cellData">1</div>
                            </div>
                        </div>
                    </div>
                    <div :class="$style.planning19">
                        <div :class="$style.listSchedulePlanning">
                            <div :class="$style.schedule20" @click="openListRightClick4">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 3 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Modul Change</div>
                                </div>
                            </div>
                            <div :class="$style.schedule21">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 2 #3</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Kitting</div>
                                </div>
                            </div>
                            <div :class="$style.xm2024070501Parent">
                                <div :class="$style.div">XM20240705-01</div>
                                <div :class="$style.production3">Production</div>
                            </div>
                            <div :class="$style.schedule4">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 2 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">BOM</div>
                                </div>
                            </div>
                            <div :class="$style.schedule23">
                                <div :class="$style.scheduleItem" />
                                <div :class="$style.frameGroup">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 3 #3</div>
                                </div>
                                <div :class="$style.scheduleInner" />
                                <div :class="$style.productionParent">
                                    <div :class="$style.div">Production</div>
                                    <div :class="$style.div">Qty Output 3.000/5.000 (60%)</div>
                                </div>
                            </div>
                            <div :class="$style.schedule24">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 3 #1</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Issue</div>
                                </div>
                            </div>
                        </div>
                        <div :class="$style.frameParent5">
                            <div :class="$style.xm2024070501Parent">
                                <div :class="$style.div">XM20240705-01</div>
                                <div :class="$style.production3">Production</div>
                            </div>
                            <div :class="$style.schedule8">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #1</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">Preparation</div>
                                </div>
                            </div>
                            <div :class="$style.schedule26">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Planning</div>
                                </div>
                            </div>
                            <div :class="$style.xm2024070501Parent5">
                                <div :class="$style.div">XM20240705-01</div>
                                <div :class="$style.production3">Production</div>
                            </div>
                            <div :class="$style.schedule26">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Planning</div>
                                </div>
                            </div>
                        </div>
                        <div :class="$style.scheduleWrapper">
                            <div :class="$style.schedule28">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #1</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">Preparation</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="$style.planning22">
                        <div :class="$style.listSchedulePlanning">
                            <div :class="$style.schedule29">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 4 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">Completed</div>
                                </div>
                            </div>
                            <div :class="$style.schedule30">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 2 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">BOM</div>
                                </div>
                            </div>
                            <div :class="$style.schedule31">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 3 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Modul Change</div>
                                </div>
                            </div>
                            <div :class="$style.schedule32">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 2 #3</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Kitting</div>
                                </div>
                            </div>
                            <div :class="$style.schedule33">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 4 #1</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">Cancel </div>
                                </div>
                            </div>
                        </div>
                        <div :class="$style.frameParent34">
                            <div :class="$style.xm2024070501Parent6">
                                <div :class="$style.div">XM20240705-01</div>
                                <div :class="$style.production3">Production</div>
                            </div>
                            <div :class="$style.schedule34">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #1</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">Preparation</div>
                                </div>
                            </div>
                        </div>
                        <div :class="$style.scheduleWrapper">
                            <div :class="$style.schedule35">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Planning</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="$style.planning24">
                        <div :class="$style.scheduleParent3">
                            <div :class="$style.schedule36">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 3 #1</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Issue</div>
                                </div>
                            </div>
                            <div :class="$style.schedule37">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 4 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">Completed</div>
                                </div>
                            </div>
                            <div :class="$style.schedule38">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 3 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Modul Change</div>
                                </div>
                            </div>
                            <div :class="$style.schedule39">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Planning</div>
                                </div>
                            </div>
                        </div>
                        <div :class="$style.frameParent41">
                            <div :class="$style.xm2024070501Parent7">
                                <div :class="$style.div">XM20240705-01</div>
                                <div :class="$style.production3">Production</div>
                            </div>
                            <div :class="$style.schedule40">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Planning</div>
                                </div>
                            </div>
                            <div :class="$style.schedule41">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #1</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">Preparation</div>
                                </div>
                            </div>
                            <div :class="$style.schedule41">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #1</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">Preparation</div>
                                </div>
                            </div>
                        </div>
                        <div :class="$style.scheduleParent4">
                            <div :class="$style.schedule43">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Planning</div>
                                </div>
                            </div>
                            <div :class="$style.schedule44">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #1</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">Preparation</div>
                                </div>
                            </div>
                            <div :class="$style.schedule43">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Planning</div>
                                </div>
                            </div>
                            <div :class="$style.schedule44">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #1</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">Preparation</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="$style.planning29">
                        <div :class="$style.listSchedulePlanning">
                            <div :class="$style.schedule29">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 4 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">Completed</div>
                                </div>
                            </div>
                            <div :class="$style.schedule29">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 4 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">Completed</div>
                                </div>
                            </div>
                        </div>
                        <div :class="$style.frameParent51">
                            <div :class="$style.xm2024070501Parent7">
                                <div :class="$style.div">XM20240705-01</div>
                                <div :class="$style.production3">Production</div>
                            </div>
                            <div :class="$style.schedule40">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #2</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.issueWrapper">
                                    <div :class="$style.div">Planning</div>
                                </div>
                            </div>
                            <div :class="$style.schedule41">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #1</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">Preparation</div>
                                </div>
                            </div>
                        </div>
                        <div :class="$style.scheduleWrapper">
                            <div :class="$style.schedule44">
                                <div :class="$style.frameParent">
                                    <div :class="$style.xm2024070501Wrapper">
                                        <div :class="$style.xm2024070501">XM20240705-01</div>
                                    </div>
                                    <div :class="$style.factory42">Factory 1 #1</div>
                                </div>
                                <div :class="$style.scheduleChild" />
                                <div :class="$style.completedWrapper">
                                    <div :class="$style.div">Preparation</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="$style.scheduleChild52" />
                </div>
                <div :class="$style.line">
                    <div :class="$style.spacer">
                        <img :class="$style.infoCircleIcon" alt="" src="" />
                        <div :class="$style.info">
                            <div :class="$style.draft">1 : Planning</div>
                            <div :class="$style.draft">2 & 3 : Draft</div>
                        </div>
                    </div>
                    <div :class="$style.sectionLineAngka">
                        <div :class="$style.sectionLine">
                            <div :class="$style.line1">
                                <div :class="$style.gantt">AS-01 (MB)</div>
                                <img :class="$style.kunciIcon" alt="" src="" />
                                <div :class="$style.foto" />
                            </div>
                            <div :class="$style.line1">
                                <div :class="$style.gantt">AS-02 (MB)</div>
                                <img :class="$style.kunciIcon" alt="" src="" />
                                <div :class="$style.foto" />
                            </div>
                            <div :class="$style.line1">
                                <div :class="$style.gantt">AS-03 (MB)</div>
                                <img :class="$style.kunciIcon" alt="" src="" />
                                <div :class="$style.foto" />
                            </div>
                            <div :class="$style.line4">
                                <div :class="$style.gantt">AS-04 (MB)</div>
                                <img :class="$style.kunciIcon" alt="" src="" />
                                <img :class="$style.fotoIcon" alt="" src="" />
                            </div>
                            <div :class="$style.line4">
                                <div :class="$style.gantt">AS-05 (MB)</div>
                                <img :class="$style.kunciIcon" alt="" src="" />
                                <img :class="$style.fotoIcon" alt="" src="" />
                            </div>
                            <div :class="$style.line4">
                                <div :class="$style.gantt">AS-06 (MB)</div>
                                <img :class="$style.kunciIcon" alt="" src="" />
                                <img :class="$style.fotoIcon3" alt="" src="" />
                            </div>
                        </div>
                        <div :class="$style.sectionLine1">
                            <div :class="$style.line7">
                                <div :class="$style.spacer1">
                                    <img :class="$style.ganttIcon" alt="" src="" />
                                    <div :class="$style.gantt">
                                        <p :class="$style.act">Act.</p>
                                        <p :class="$style.act">Plan</p>
                                    </div>
                                </div>
                                <div :class="$style.spacer2">
                                    <img :class="$style.ganttIcon" alt="" src="" />
                                    <div :class="$style.gantt">
                                        <p :class="$style.act">Draft</p>
                                        <p :class="$style.act">Plan</p>
                                    </div>
                                </div>
                            </div>
                            <div :class="$style.line7">
                                <div :class="$style.spacer1">
                                    <img :class="$style.ganttIcon" alt="" src="" />
                                    <div :class="$style.gantt">
                                        <p :class="$style.act">Act.</p>
                                        <p :class="$style.act">Plan</p>
                                    </div>
                                </div>
                                <div :class="$style.spacer2">
                                    <img :class="$style.ganttIcon" alt="" src="" />
                                    <div :class="$style.gantt">
                                        <p :class="$style.act">Draft</p>
                                        <p :class="$style.act">Plan</p>
                                    </div>
                                </div>
                            </div>
                            <div :class="$style.line7">
                                <div :class="$style.spacer1">
                                    <img :class="$style.ganttIcon" alt="" src="" />
                                    <div :class="$style.gantt">
                                        <p :class="$style.act">Act.</p>
                                        <p :class="$style.act">Plan</p>
                                    </div>
                                </div>
                                <div :class="$style.spacer2">
                                    <img :class="$style.ganttIcon" alt="" src="" />
                                    <div :class="$style.gantt">
                                        <p :class="$style.act">Draft</p>
                                        <p :class="$style.act">Plan</p>
                                    </div>
                                </div>
                            </div>
                            <div :class="$style.line7">
                                <div :class="$style.spacer1">
                                    <img :class="$style.ganttIcon" alt="" src="" />
                                    <div :class="$style.gantt">
                                        <p :class="$style.act">Act.</p>
                                        <p :class="$style.act">Plan</p>
                                    </div>
                                </div>
                                <div :class="$style.spacer2">
                                    <img :class="$style.ganttIcon" alt="" src="" />
                                    <div :class="$style.gantt">
                                        <p :class="$style.act">Draft</p>
                                        <p :class="$style.act">Plan</p>
                                    </div>
                                </div>
                            </div>
                            <div :class="$style.line7">
                                <div :class="$style.spacer1">
                                    <img :class="$style.ganttIcon" alt="" src="" />
                                    <div :class="$style.gantt">
                                        <p :class="$style.act">Act.</p>
                                        <p :class="$style.act">Plan</p>
                                    </div>
                                </div>
                                <div :class="$style.spacer2">
                                    <img :class="$style.ganttIcon" alt="" src="" />
                                    <div :class="$style.gantt">
                                        <p :class="$style.act">Draft</p>
                                        <p :class="$style.act">Plan</p>
                                    </div>
                                </div>
                            </div>
                            <div :class="$style.line7">
                                <div :class="$style.spacer1">
                                    <img :class="$style.ganttIcon" alt="" src="" />
                                    <div :class="$style.gantt">
                                        <p :class="$style.act">Act.</p>
                                        <p :class="$style.act">Plan</p>
                                    </div>
                                </div>
                                <div :class="$style.spacer2">
                                    <img :class="$style.ganttIcon" alt="" src="" />
                                    <div :class="$style.gantt">
                                        <p :class="$style.act">Draft</p>
                                        <p :class="$style.act">Plan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="$style.info1">
                <div :class="$style.filter">
                    <div :class="$style.div">Work Order</div>
                    <div :class="$style.sa">XM20240702-05</div>
                </div>
                <div :class="$style.filter">
                    <div :class="$style.div">Model Number</div>
                    <div :class="$style.sa">SMC523C3UN20000M1</div>
                </div>
                <div :class="$style.filter">
                    <div :class="$style.div">QTY</div>
                    <div :class="$style.sa">15498</div>
                </div>
                <div :class="$style.filter">
                    <div :class="$style.div">Process</div>
                    <div :class="$style.sa">SA</div>
                </div>
                <div :class="$style.filter">
                    <div :class="$style.div">Start</div>
                    <div :class="$style.sa">2024-07-10 14:07</div>
                </div>
                <div :class="$style.filter">
                    <div :class="$style.div">Est. end</div>
                    <div :class="$style.sa">2024-07-11 22:06</div>
                </div>
            </div>
        </div>
    <!-- end table -->
    </div>
<!-- method -->
    <PortalPopup v-if="isReportOpen" overlayColor="rgba(113, 113, 113, 0.3)" placement="Centered"
        :onOutsideClick="closeReport">
        <Report1 :onClose="closeReport" />
    </PortalPopup>
    <PortalPopup v-if="isModalAddScheduleOpen" overlayColor="rgba(113, 113, 113, 0.3)" placement="Centered"
        :onOutsideClick="closeModalAddSchedule">
        <ModalAddSchedule :onClose="closeModalAddSchedule" />
    </PortalPopup>
    <PortalPopup v-if="isFilterScheduleOpen" overlayColor="rgba(113, 113, 113, 0.3)" placement="Centered"
        :onOutsideClick="closeFilterSchedule">
        <FilterSchedule :onClose="closeFilterSchedule" />
    </PortalPopup>
    <PortalPopup v-if="isCalendarToOpen" overlayColor="rgba(113, 113, 113, 0.3)" placement="Centered"
        :onOutsideClick="closeCalendarTo">
        <CalendarTo :onClose="closeCalendarTo" />
    </PortalPopup>
    <PortalPopup v-if="isDropdownRangeHoursOpen" overlayColor="rgba(113, 113, 113, 0.3)" placement="Centered"
        :onOutsideClick="closeDropdownRangeHours">
        <DropdownRangeHours :onClose="closeDropdownRangeHours" />
    </PortalPopup>
    <PortalPopup v-if="isReport1Open" overlayColor="rgba(113, 113, 113, 0.3)" placement="Centered"
        :onOutsideClick="closeReport1">
        <Report :onClose="closeReport1" />
    </PortalPopup>
    <PortalPopup v-if="isListRightClickOpen" overlayColor="rgba(113, 113, 113, 0.3)" placement="Centered"
        :onOutsideClick="closeListRightClick">
        <ListRightClick4 :onClose="closeListRightClick" />
    </PortalPopup>
    <PortalPopup v-if="isListRightClick1Open" overlayColor="rgba(113, 113, 113, 0.3)" placement="Centered"
        :onOutsideClick="closeListRightClick1">
        <ListRightClick3 :onClose="closeListRightClick1" />
    </PortalPopup>
    <PortalPopup v-if="isListRightClick2Open" overlayColor="rgba(113, 113, 113, 0.3)" placement="Centered"
        :onOutsideClick="closeListRightClick2">
        <ListRightClick2 :onClose="closeListRightClick2" />
    </PortalPopup>
    <PortalPopup v-if="isListRightClick3Open" overlayColor="rgba(113, 113, 113, 0.3)" placement="Centered"
        :onOutsideClick="closeListRightClick3">
        <ListRightClick1 :onClose="closeListRightClick3" />
    </PortalPopup>
    <PortalPopup v-if="isScheduleDetailsOpen" overlayColor="rgba(113, 113, 113, 0.3)" placement="Centered"
        :onOutsideClick="closeScheduleDetails">
        <ScheduleDetails :onClose="closeScheduleDetails" />
    </PortalPopup>
    <PortalPopup v-if="isListRightClick4Open" overlayColor="rgba(113, 113, 113, 0.3)" placement="Centered"
        :onOutsideClick="closeListRightClick4">
        <ListRightClick :onClose="closeListRightClick4" />
    </PortalPopup>
<!-- method -->
</template>
<script lang="ts">
import { defineComponent } from 'vue';

// import { defineComponent } from 'vue'
// import Report1 from "../components/Report1.vue";
// import PortalPopup from "../components/PortalPopup.vue";
// import ModalAddSchedule from "../components/ModalAddSchedule.vue";
// import FilterSchedule from "../components/FilterSchedule.vue";
// import CalendarTo from "../components/CalendarTo.vue";
// import DropdownRangeHours from "../components/DropdownRangeHours.vue";
// import Report from "../components/Report.vue";
// import ListRightClick4 from "../components/ListRightClick4.vue";
// import ListRightClick3 from "../components/ListRightClick3.vue";
// import ListRightClick2 from "../components/ListRightClick2.vue";
// import ListRightClick1 from "../components/ListRightClick1.vue";
// import ScheduleDetails from "../components/ScheduleDetails.vue";
// import ListRightClick from "../components/ListRightClick.vue";

export default defineComponent({
    name: "Home",
    data() { return { isReportOpen: false, isModalAddScheduleOpen: false, isFilterScheduleOpen: false, isCalendarToOpen: false, isDropdownRangeHoursOpen: false, isReport1Open: false, isListRightClickOpen: false, isListRightClick1Open: false, isListRightClick2Open: false, isListRightClick3Open: false, isScheduleDetailsOpen: false, isListRightClick4Open: false } },
    // components: { Report1, PortalPopup, ModalAddSchedule, FilterSchedule, CalendarTo, DropdownRangeHours, Report, ListRightClick4, ListRightClick3, ListRightClick2, ListRightClick1, ScheduleDetails, ListRightClick }
    methods: {
        openReport() {
            this.isReportOpen = true;
        },
        closeReport() {
            this.isReportOpen = false;
        },
        openModalAddSchedule() {
            this.isModalAddScheduleOpen = true;
        },
        closeModalAddSchedule() {
            this.isModalAddScheduleOpen = false;
        },
        openFilterSchedule() {
            this.isFilterScheduleOpen = true;
        },
        closeFilterSchedule() {
            this.isFilterScheduleOpen = false;
        },
        openCalendarTo() {
            this.isCalendarToOpen = true;
        },
        closeCalendarTo() {
            this.isCalendarToOpen = false;
        },
        openDropdownRangeHours() {
            this.isDropdownRangeHoursOpen = true;
        },
        closeDropdownRangeHours() {
            this.isDropdownRangeHoursOpen = false;
        },
        openReport1() {
            this.isReport1Open = true;
        },
        closeReport1() {
            this.isReport1Open = false;
        },
        openListRightClick() {
            this.isListRightClickOpen = true;
        },
        closeListRightClick() {
            this.isListRightClickOpen = false;
        },
        openListRightClick1() {
            this.isListRightClick1Open = true;
        },
        closeListRightClick1() {
            this.isListRightClick1Open = false;
        },
        openListRightClick2() {
            this.isListRightClick2Open = true;
        },
        closeListRightClick2() {
            this.isListRightClick2Open = false;
        },
        openListRightClick3() {
            this.isListRightClick3Open = true;
        },
        closeListRightClick3() {
            this.isListRightClick3Open = false;
        },
        openScheduleDetails() {
            this.isScheduleDetailsOpen = true;
        },
        closeScheduleDetails() {
            this.isScheduleDetailsOpen = false;
        },
        openListRightClick4() {
            this.isListRightClick4Open = true;
        },
        closeListRightClick4() {
            this.isListRightClick4Open = false;
        },
        onTabListClick() {
            // Add your code here
        }
    }
})</script>
<style module>
.tab1 {
    border-radius: 8px 8px 0px 0px;
    background-color: #fefefe;
    border-top: 1px solid #a7a7a7;
    border-right: 1px solid #a7a7a7;
    border-left: 1px solid #a7a7a7;
    box-sizing: border-box;
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px 12px;
}

.chevronDownIcon {
    width: 20px;
    position: relative;
    height: 20px;
}

.tab3 {
    border-radius: 8px 8px 0px 0px;
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px 12px;
    box-sizing: border-box;
    gap: 10px;
    cursor: pointer;
    color: #333;
}

.tab {
    border-bottom: 1px solid #a7a7a7;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}

.menu {
    position: absolute;
    top: 90.5px;
    left: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}

.ganttIcon0 {
    width: 24px;
    position: relative;
    height: 24px;
    overflow: hidden;
    flex-shrink: 0;
}

.gantt {
    position: relative;
    letter-spacing: 0.2px;
    line-height: 120%;
    font-weight: 500;
}

.tabGantt {
    border-bottom: 1px solid #cd202e;
    box-sizing: border-box;
    height: 43px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 8px;
    gap: 4px;
    color: #cd202e;
}

.listIcon {
    width: 24px;
    position: relative;
    height: 24px;
}

.tabList {
    height: 43px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 8px;
    box-sizing: border-box;
    gap: 10px;
    cursor: pointer;
}

.tab5 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}

.report {
    position: relative;
    letter-spacing: 0.2px;
    line-height: 120%;
    font-weight: 600;
}

.buttonWithIcon {
    border-radius: 12px;
    background-color: #fefefe;
    border: 1px solid #ced3d7;
    box-sizing: border-box;
    height: 41px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    gap: 10px;
    cursor: pointer;
}

.buttonWithIcon1 {
    border-radius: 12px;
    background-color: #fefefe;
    border: 1px solid #ced3d7;
    box-sizing: border-box;
    height: 41px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    gap: 10px;
}

.july2024 {
    position: relative;
    letter-spacing: 0.2px;
    line-height: 120%;
    color: #11150d;
}

.filter {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
}

.filterWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 14px;
    color: #41443d;
}

.tabLegend {
    position: absolute;
    top: 142px;
    left: 36px;
    width: 1848px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #585858;
}

.lastUpdate18 {
    position: absolute;
    top: 104px;
    left: 1672px;
    font-size: 14px;
    letter-spacing: 0.2px;
    line-height: 120%;
    color: #11150d;
}

.buttonWithIcon2 {
    border-radius: 12px;
    background-color: #cd202e;
    height: 41px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    box-sizing: border-box;
    gap: 12px;
    cursor: pointer;
    color: #fefefe;
}

.form {
    width: 360px;
    border-radius: 12px;
    background-color: #fefefe;
    border: 1px solid #bbc0c4;
    box-sizing: border-box;
    height: 41px;
    overflow: hidden;
    flex-shrink: 0;
    display: none;
    cursor: pointer;
}

.buttonWithIcon5 {
    border-radius: 12px;
    background-color: #fefefe;
    border: 1px solid #ced3d7;
    box-sizing: border-box;
    height: 41px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px;
    cursor: pointer;
}

.div {
    position: relative;
    letter-spacing: 0.2px;
    line-height: 120%;
}

.persentage {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
    cursor: pointer;
}

.rangeTimePer12Jam {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    font-size: 16px;
    color: #333;
}

.frameChild {
    width: 20px;
    position: relative;
    border-radius: 4px;
    background-color: #d7dbde;
    height: 16px;
}

.frameItem {
    width: 20px;
    position: relative;
    border-radius: 4px;
    background-color: #85c6ff;
    height: 16px;
}

.frameInner {
    width: 20px;
    position: relative;
    border-radius: 4px;
    background-color: #efb4ae;
    height: 16px;
}

.rectangleDiv {
    width: 20px;
    position: relative;
    border-radius: 4px;
    background-color: #b4ffdd;
    height: 16px;
}

.frameChild1 {
    width: 20px;
    position: relative;
    border-radius: 4px;
    background-color: #ffb5d7;
    height: 16px;
}

.frameChild2 {
    width: 20px;
    position: relative;
    border-radius: 4px;
    background-color: #d9c2fb;
    height: 16px;
}

.frameChild3 {
    width: 20px;
    position: relative;
    border-radius: 4px;
    background-color: #fd9a47;
    height: 16px;
}

.frameChild4 {
    width: 20px;
    position: relative;
    border-radius: 4px;
    background-color: #ea9fa5;
    height: 16px;
}

.rectangleParent4 {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
}

.frameChild5 {
    width: 20px;
    position: relative;
    border-radius: 4px;
    background-color: #9ee0b3;
    height: 16px;
}

.legend {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 24px;
    font-size: 16px;
    color: #333;
}

.tabLegend1 {
    position: absolute;
    top: 197px;
    left: 36px;
    width: 1848px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #41443d;
}

.logoIcon {
    width: 34.4px;
    position: relative;
    height: 32px;
}

.coraPlatform {
    align-self: stretch;
    position: relative;
    letter-spacing: 0.2px;
    line-height: 120%;
}

.advanceProductionSchedulling {
    align-self: stretch;
    position: relative;
    font-size: 12px;
    letter-spacing: 0.2px;
    line-height: 120%;
    font-weight: 500;
}

.coraPlatformParent {
    height: 37px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.logoPlantMaintenance {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 4px;
    gap: 12px;
}

.logoAndMenu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 12px;
    gap: 16px;
}

.nama {
    position: relative;
    font-weight: 500;
}

.namaSection {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
}

.fotoIcon {
    width: 40px;
    position: relative;
    height: 40px;
    object-fit: cover;
}

.namaSectionParent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 12px 0px;
    gap: 12px;
}

.profil {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
}

.profilSection {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    color: #fefdfd;
    font-family: Inter;
}

.masterDataDropdownheader {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: #cd202e;
    width: 1920px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 8px 24px;
    box-sizing: border-box;
    color: #fff;
}

.mon01July {
    flex: 1;
    position: relative;
    letter-spacing: 0.2px;
    line-height: 120%;
    font-weight: 500;
}

.tanggal {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px;
}

.div2 {
    flex: 1;
    border-radius: 8px 8px 0px 0px;
    background-color: #eaecee;
    border-bottom: 1px solid #afb3b7;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

.div4 {
    flex: 1;
    background-color: #fefefe;
    border-bottom: 1px solid #afb3b7;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

.jam {
    align-self: stretch;
    background-color: #fff;
    height: 37px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 14px;
}

.jamTanggalPlanning {
    align-self: stretch;
    background-color: #fefefe;
    height: 82px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}

.div10 {
    align-self: stretch;
    flex: 1;
    background-color: #eaecee;
}

.div11 {
    align-self: stretch;
    flex: 1;
    background-color: #fefefe;
}

.planning2 {
    align-self: stretch;
    flex: 1;
    background-color: #fff;
    border-top: 1px solid #afb3b7;
    border-bottom: 1px solid #afb3b7;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
}

.dailyPlanning {
    align-self: stretch;
    width: 251px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.tanggal3 {
    align-self: stretch;
    flex: 1;
    border-radius: 12px;
    background-color: #fae9ea;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px;
}

.jam3 {
    align-self: stretch;
    background-color: #fff;
    height: 37px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 14px;
    color: #000;
}

.dailyPlanning3 {
    align-self: stretch;
    width: 251px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: #cd202e;
}

.planning1 {
    position: absolute;
    height: calc(100% + 775px);
    width: calc(100% + 297px);
    top: 0px;
    right: -297px;
    bottom: -775px;
    left: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    color: #000;
}

.xm2024070501 {
    flex: 1;
    position: relative;
    letter-spacing: 0.2px;
    line-height: 120%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.xm2024070501Wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}

.factory42 {
    align-self: stretch;
    position: relative;
    font-size: 12px;
    letter-spacing: 0.2px;
    line-height: 120%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.frameParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.scheduleChild {
    align-self: stretch;
    position: relative;
    border-top: 0.5px solid #7e7e7e;
    box-sizing: border-box;
    height: 0.5px;
}

.completedWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 12px;
}

.schedule1 {
    width: 242px;
    border-radius: 8px;
    background-color: #9ee0b3;
    border: 1px solid #46c46e;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.scheduleItem {
    width: calc(100% - 120.5px);
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 120.5px;
    left: 0px;
    background-color: #fd9a47;
    height: 71px;
    z-index: 0;
}

.frameGroup {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 1;
}

.scheduleInner {
    align-self: stretch;
    position: relative;
    border-top: 0.5px solid #7e7e7e;
    box-sizing: border-box;
    height: 0.5px;
    z-index: 2;
}

.span {
    font-weight: 600;
}

.productionParent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    z-index: 3;
    font-size: 12px;
}

.schedule2 {
    width: 242px;
    border-radius: 8px;
    background-color: #ffe1c9;
    border: 1px solid #feb272;
    box-sizing: border-box;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    position: relative;
    gap: 4px;
    cursor: pointer;
}

.issueWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 12px;
}

.schedule3 {
    width: 242px;
    border-radius: 8px;
    background-color: #ffb5d7;
    border: 1px solid #ff71b3;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
    cursor: pointer;
}

.schedule4 {
    width: 242px;
    border-radius: 8px;
    background-color: #efb4ae;
    border: 1px solid #c88b85;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.schedule5 {
    width: 242px;
    border-radius: 8px;
    background-color: #d9c2fb;
    border: 1px solid #9c5ef4;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.schedule6 {
    width: 242px;
    border-radius: 8px;
    background-color: #85c6ff;
    border: 1px solid #3da5ff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
    cursor: pointer;
}

.schedule7 {
    width: 242px;
    border-radius: 8px;
    background-color: #ffe1c9;
    border: 1px solid #feb272;
    box-sizing: border-box;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    position: relative;
    gap: 4px;
}

.listSchedulePlanning {
    position: absolute;
    width: calc(100% - 8px);
    top: 0px;
    right: 8px;
    left: 0px;
    border-bottom: 1px solid #afb3b7;
    box-sizing: border-box;
    height: 81.7px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 4px 8px;
    gap: 8px;
}

.production3 {
    position: relative;
    font-size: 12px;
    letter-spacing: 0.2px;
    line-height: 120%;
}

.xm2024070501Parent {
    align-self: stretch;
    width: 289px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 8px 16px;
    box-sizing: border-box;
    text-align: center;
    color: transparent;
}

.schedule8 {
    width: 242px;
    border-radius: 8px;
    background-color: #d7dbde;
    border: 1px solid #afb3b7;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.schedule9 {
    width: 377px;
    border-radius: 8px;
    background-color: #85c6ff;
    border: 1px solid #3da5ff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.frameParent5 {
    position: absolute;
    width: calc(100% - 8px);
    top: 81.67px;
    right: 8px;
    left: 0px;
    border-bottom: 1px solid #afb3b7;
    box-sizing: border-box;
    height: 81.7px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 4px 8px;
    gap: 8px;
}

.schedule10 {
    width: 372px;
    border-radius: 8px;
    background-color: #85c6ff;
    border: 1px solid #3da5ff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.scheduleParent {
    position: absolute;
    width: calc(100% - 8px);
    top: 163.34px;
    right: 8px;
    left: 0px;
    height: 81.7px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 4px 8px;
    box-sizing: border-box;
    gap: 8px;
}

.planning11 {
    position: absolute;
    width: calc(100% + 528px);
    top: 81.5px;
    right: -528px;
    left: 0px;
    border-top: 1px solid #afb3b7;
    border-bottom: 1px solid #afb3b7;
    box-sizing: border-box;
    height: 246px;
}

.schedule12 {
    width: 242px;
    border-radius: 8px;
    background-color: #ea9fa5;
    border: 1px solid #d64854;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
    overflow:hidden;
}

.schedule13 {
    width: 525px;
    border-radius: 8px;
    background-color: #ffe1c9;
    border: 1px solid #feb272;
    box-sizing: border-box;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    position: relative;
    gap: 4px;
    cursor: pointer;
}

.schedule14 {
    width: 242px;
    border-radius: 8px;
    background-color: #b4ffdd;
    border: 1px solid #8bd9b6;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
    cursor: pointer;
}

.xm2024070501Parent1 {
    align-self: stretch;
    width: 289px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 8px 16px;
    box-sizing: border-box;
}

.schedule16 {
    width: 242px;
    border-radius: 8px;
    background-color: #85c6ff;
    border: 1px solid #3da5ff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
    text-align: left;
    color: #333;
}

.schedule17 {
    width: 242px;
    border-radius: 8px;
    background-color: #d7dbde;
    border: 1px solid #afb3b7;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
    text-align: left;
    color: #333;
}

.frameParent14 {
    position: absolute;
    width: calc(100% - 8px);
    top: 81.67px;
    right: 8px;
    left: 0px;
    border-bottom: 1px solid #afb3b7;
    box-sizing: border-box;
    height: 81.7px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 4px 8px;
    gap: 8px;
    text-align: center;
    color: transparent;
}

.cellData {
    position: relative;
    letter-spacing: 0.2px;
    line-height: 120%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.komponenTabel {
    align-self: stretch;
    width: 77px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 12px;
    box-sizing: border-box;
    font-size: 16px;
}

.komponenTabel1 {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 12px;
}

.cellData2 {
    width: 58px;
    position: relative;
    letter-spacing: 0.2px;
    line-height: 120%;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-shrink: 0;
}

.komponenTabel2 {
    align-self: stretch;
    width: 94px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 12px;
    box-sizing: border-box;
}

.komponenTabel3 {
    align-self: stretch;
    width: 71px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 12px;
    box-sizing: border-box;
}

.processList {
    position: absolute;
    top: 78px;
    left: 1837px;
    background-color: #fefefe;
    border-bottom: 1px solid #ced3d7;
    box-sizing: border-box;
    width: 408px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 14px;
    color: #11150d;
}

.planning15 {
    position: absolute;
    width: calc(100% + 528px);
    top: 326.5px;
    right: -528px;
    left: 0px;
    border-top: 1px solid #afb3b7;
    border-bottom: 1px solid #afb3b7;
    box-sizing: border-box;
    height: 246px;
    overflow-x: hidden;
}

.schedule20 {
    width: 242px;
    border-radius: 8px;
    background-color: #d9c2fb;
    border: 1px solid #9c5ef4;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
    cursor: pointer;
}

.schedule21 {
    width: 242px;
    border-radius: 8px;
    background-color: #b4ffdd;
    border: 1px solid #8bd9b6;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.schedule23 {
    width: 305px;
    border-radius: 8px;
    background-color: #ffe1c9;
    border: 1px solid #feb272;
    box-sizing: border-box;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    position: relative;
    gap: 4px;
}

.schedule24 {
    width: 242px;
    border-radius: 8px;
    background-color: #ffb5d7;
    border: 1px solid #ff71b3;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.schedule26 {
    width: 242px;
    border-radius: 8px;
    background-color: #85c6ff;
    border: 1px solid #3da5ff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.xm2024070501Parent5 {
    align-self: stretch;
    width: 482px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 8px 16px;
    box-sizing: border-box;
    text-align: center;
    color: transparent;
}

.schedule28 {
    width: 525px;
    border-radius: 8px;
    background-color: #d7dbde;
    border: 1px solid #afb3b7;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.scheduleWrapper {
    position: absolute;
    width: calc(100% - 8px);
    top: 163.34px;
    right: 8px;
    left: 0px;
    height: 81.7px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 4px 8px;
    box-sizing: border-box;
}

.planning19 {
    position: absolute;
    width: calc(100% + 528px);
    top: 572px;
    right: -528px;
    left: 0px;
    border-bottom: 1px solid #afb3b7;
    box-sizing: border-box;
    height: 245.5px;
    overflow-x: hidden
}

.schedule29 {
    width: 305px;
    border-radius: 8px;
    background-color: #9ee0b3;
    border: 1px solid #46c46e;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.schedule30 {
    width: 305px;
    border-radius: 8px;
    background-color: #efb4ae;
    border: 1px solid #c88b85;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.schedule31 {
    width: 305px;
    border-radius: 8px;
    background-color: #d9c2fb;
    border: 1px solid #9c5ef4;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.schedule32 {
    width: 305px;
    border-radius: 8px;
    background-color: #b4ffdd;
    border: 1px solid #8bd9b6;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.schedule33 {
    width: 305px;
    border-radius: 8px;
    background-color: #ea9fa5;
    border: 1px solid #d64854;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.xm2024070501Parent6 {
    width: 289px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 8px 16px;
    box-sizing: border-box;
}

.schedule34 {
    width: 352px;
    border-radius: 8px;
    background-color: #d7dbde;
    border: 1px solid #afb3b7;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
    text-align: left;
    color: #333;
}

.frameParent34 {
    position: absolute;
    width: calc(100% - 8px);
    top: 81.67px;
    right: 8px;
    left: 0px;
    border-bottom: 1px solid #afb3b7;
    box-sizing: border-box;
    height: 81.7px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 4px 8px;
    gap: 4px;
    text-align: center;
    color: transparent;
}

.schedule35 {
    width: 283px;
    border-radius: 8px;
    background-color: #85c6ff;
    border: 1px solid #3da5ff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.planning22 {
    position: absolute;
    width: calc(100% + 528px);
    top: 816.5px;
    right: -528px;
    left: 0px;
    border-top: 1px solid #afb3b7;
    border-bottom: 1px solid #afb3b7;
    box-sizing: border-box;
    height: 246px;
    overflow: hidden;
}

.schedule36 {
    width: 368px;
    border-radius: 8px;
    background-color: #ffb5d7;
    border: 1px solid #ff71b3;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.schedule37 {
    width: 368px;
    border-radius: 8px;
    background-color: #9ee0b3;
    border: 1px solid #46c46e;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.schedule38 {
    width: 368px;
    border-radius: 8px;
    background-color: #d9c2fb;
    border: 1px solid #9c5ef4;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.schedule39 {
    width: 368px;
    border-radius: 8px;
    background-color: #85c6ff;
    border: 1px solid #3da5ff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.scheduleParent3 {
    position: absolute;
    width: calc(100% - 8px);
    top: 1px;
    right: 8px;
    left: 0px;
    background-color: #fff;
    border-bottom: 1px solid #afb3b7;
    box-sizing: border-box;
    height: 81.7px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 4px 8px;
    gap: 8px;
}

.xm2024070501Parent7 {
    width: 289px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 8px 16px;
    box-sizing: border-box;
    text-align: center;
    color: transparent;
}

.schedule40 {
    width: 352px;
    border-radius: 8px;
    background-color: #85c6ff;
    border: 1px solid #3da5ff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.schedule41 {
    width: 352px;
    border-radius: 8px;
    background-color: #d7dbde;
    border: 1px solid #afb3b7;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.frameParent41 {
    position: absolute;
    width: calc(100% - 8px);
    top: 82.67px;
    right: 8px;
    left: 0px;
    border-bottom: 1px solid #afb3b7;
    box-sizing: border-box;
    height: 81.7px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 4px 8px;
    gap: 4px;
}

.schedule43 {
    width: 260px;
    border-radius: 8px;
    background-color: #85c6ff;
    border: 1px solid #3da5ff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.schedule44 {
    width: 260px;
    border-radius: 8px;
    background-color: #d7dbde;
    border: 1px solid #afb3b7;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
}

.scheduleParent4 {
    position: absolute;
    width: calc(100% - 8px);
    top: 164.34px;
    right: 8px;
    left: 0px;
    height: 81.7px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 4px 8px;
    box-sizing: border-box;
    gap: 4px;
}

.planning24 {
    position: absolute;
    width: calc(100% + 528px);
    top: 1061.5px;
    right: -528px;
    left: 0px;
    border-top: 1px solid #afb3b7;
    border-bottom: 1px solid #afb3b7;
    box-sizing: border-box;
    height: 246px;
    overflow: hidden;
}

.frameParent51 {
    position: absolute;
    width: calc(100% - 8px);
    top: 81.67px;
    right: 8px;
    left: 0px;
    border-bottom: 1px solid #afb3b7;
    box-sizing: border-box;
    height: 81.7px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 4px 8px;
    gap: 4px;
}

.planning29 {
    position: absolute;
    width: calc(100% + 528px);
    top: 1306.5px;
    right: -528px;
    left: 0px;
    border-top: 1px solid #afb3b7;
    border-bottom: 1px solid #afb3b7;
    box-sizing: border-box;
    height: 246px;
    overflow: hidden;
}

.scheduleChild52 {
    position: absolute;
    top: 80px;
    left: 850px;
    border-right: 4px dashed #348cd9;
    box-sizing: border-box;
    width: 4px;
    height: 699px;
}

.schedule {
    position: absolute;
    height: 100%;
    width: calc(100% - 177px);
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 177px;
    overflow: hidden;
}

.infoCircleIcon {
    width: 32px;
    position: relative;
    height: 32px;
    display: none;
}

.draft {
    align-self: stretch;
    position: relative;
    letter-spacing: 0.2px;
    line-height: 120%;
    font-weight: 500;
}

.info {
    width: 87px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
}

.spacer {
    align-self: stretch;
    background-color: #fff;
    height: 82px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    box-sizing: border-box;
    gap: 10px;
}

.kunciIcon {
    width: 40px;
    position: relative;
    height: 40px;
}

.foto {
    width: 40px;
    position: relative;
    height: 40px;
    display: none;
}

.line1 {
    align-self: stretch;
    border-top: 1px solid #afb3b7;
    border-bottom: 1px solid #afb3b7;
    box-sizing: border-box;
    height: 246px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    gap: 10px;
}

.line4 {
    align-self: stretch;
    border-top: 1px solid #afb3b7;
    border-bottom: 1px solid #afb3b7;
    box-sizing: border-box;
    height: 246px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 16px;
    gap: 10px;
}

.fotoIcon3 {
    width: 40px;
    position: relative;
    height: 40px;
    object-fit: contain;
}

.sectionLine {
    width: 117px;
    border: 1px solid #ced3d7;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.act {
    margin: 0;
}

.spacer1 {
    align-self: stretch;
    border-bottom: 1px solid #ced3d7;
    box-sizing: border-box;
    height: 81.7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px;
    gap: 4px;
}

.spacer2 {
    align-self: stretch;
    flex: 1;
    border-bottom: 1px solid #ced3d7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px;
    gap: 4px;
}

.line7 {
    align-self: stretch;
    border-top: 1px solid #afb3b7;
    border-bottom: 1px solid #afb3b7;
    box-sizing: border-box;
    height: 246px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.sectionLine1 {
    width: 60px;
    border: 1px solid #ced3d7;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 12px;
}

.sectionLineAngka {
    align-self: stretch;
    background-color: #fefefe;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}

.line {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 177px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: center;
}

.ganttChart {
    width: 1848px;
    flex: 1;
    position: relative;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #ced3d7;
    box-sizing: border-box;
    overflow-y: auto;
}

.sa {
    position: relative;
    letter-spacing: 0.2px;
    line-height: 120%;
    font-weight: 600;
    color: #333;
}

.info1 {
    width: 1326px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #585858;
}

.ganttChartInfo {
    position: absolute;
    top: 254px;
    left: 36px;
    height: 810px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 16px;
    color: #333;
}

.home {
    width: 100%;
    position: relative;
    background-color: #fff;
    height: 1080px;
    text-align: left;
    font-size: 16px;
    color: #cd202e;
    font-family: Roboto;
}   
</style>