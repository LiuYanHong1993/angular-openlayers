import { Component, OnInit } from '@angular/core';
import { Map, View } from 'ol';
import { Tile } from "ol/layer";
import { OSM, XYZ, Vector } from "ol/source";

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
    this.source = new Vector({ wrapX: false });
            this.drawLayer = new Vector({
                source: this.source,
                style: new ol.style.Style({
                    fill: new ol.style.Fill({
                        color: $('#FillClr').val()
                    }),
                    stroke: new ol.style.Stroke({
                        color: $('#LinClr').val(),
                        lineCap: $('#LinHeadType').val(),
                        lineJoin: $('#LinJointType').val(),
                        lineDash: [parseInt($('#LinDash').val()), parseInt($('#LinDot').val())],
                        width: parseInt($('#LinWidth').val())
                    }),
                    image: new ol.style.Circle({
                        radius: parseInt($('#PntRadius').val()),
                        fill: new ol.style.Fill({
                            color: $('#FillClr').val()
                        })
                    })
                })
            });
  }

}
