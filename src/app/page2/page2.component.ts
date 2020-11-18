import { Component, OnInit } from '@angular/core';
import { Map, View } from 'ol';
import * as layer from "ol/layer";
import * as style from "ol/Style";
import * as source from "ol/source";

@Component({
    selector: 'app-page2',
    templateUrl: './page2.component.html',
    styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
    //地图容器
    public map: any;
    //军标绘制图层
    public drawLayer: any;
    //矢量资源
    public source: any;
    //绘制工具
    public drawTool: any;
    //修改工具
    public modifyTool: any;
    //移动工具
    public dragTool: any;
    //选择工具
    public selectTool: any;
    //拉框选择工具
    public boxSelectTool: any;
    //选中要素数组
    public selectedFeatures: any;
    //样式数组
    public styles: any;

    constructor() { }

    ngOnInit(): void {
    //     this.source = new source.Vector({ wrapX: false });
    //     this.drawLayer = new layer.Vector({
    //         // source: this.source,
    //         style: new style.Style({
    //             fill: new style.Fill({
    //                 color: 'black'
    //             }),
    //             stroke: new style.Stroke({
    //                 color: 'yellow',
    //                 lineCap: 'round',
    //                 lineJoin: 'round',
    //                 lineDash: [0, 0],
    //                 width: 2
    //             }),
    //             image: new style.Circle({
    //                 radius: 10,
    //                 fill: new style.Fill({
    //                     color: 'red'
    //                 })
    //             })
    //         })
    //     });

    //     //初始化天地图图层
    //     var layer1 = new Zondy.Map.TianDiTu({
    //         layerType: Zondy.Enum.Map.TiandituType.VEC_IGS,
    //         projection: ol.proj.get('EPSG:4326'),
    //         ip: "develop.smaryun.com",
    //         port: "6163",    //访问IGServer的端口号，.net版为6163，Java版为8089,
    //         //天地图key
    //         token: parent.TiandituKey(),
    //     });
    //     var layer2 = new Zondy.Map.TianDiTu({
    //         layerType: Zondy.Enum.Map.TiandituType.CVA_IGS,
    //         projection: ol.proj.get('EPSG:4326'),
    //         ip: "develop.smaryun.com",
    //         port: "6163",   //访问IGServer的端口号，.net版为6163，Java版为8089,
    //         //天地图key
    //         token: parent.TiandituKey(),
    //     });
    //     //初始化地图容器
    //     this.map = new ol.Map({
    //         target: 'mapCon',
    //         layers: [layer1, layer2, drawLayer],
    //         view: new ol.View({
    //             center: ol.proj.transform([-93.27, 44.98], 'EPSG:4326', 'EPSG:3857'),
    //             zoom: 3
    //         })
    //     });

    //     drawTool = new MilStd.tool.MilStdDrawTool(map);
    //     drawTool.on(MilStd.event.MilStdDrawEvent.DRAW_END, onDrawEnd, false, this);
    }

}
