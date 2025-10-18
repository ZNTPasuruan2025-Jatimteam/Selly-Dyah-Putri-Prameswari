var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Selly_3 = new ol.format.GeoJSON();
var features_Selly_3 = format_Selly_3.readFeatures(json_Selly_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Selly_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Selly_3.addFeatures(features_Selly_3);
var lyr_Selly_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Selly_3, 
                style: style_Selly_3,
                popuplayertitle: 'Selly',
                interactive: true,
    title: 'Selly<br />\
    <img src="styles/legend/Selly_3_0.png" /> 22<br />\
    <img src="styles/legend/Selly_3_1.png" /> 25.1<br />\
    <img src="styles/legend/Selly_3_2.png" /> 25.2<br />\
    <img src="styles/legend/Selly_3_3.png" /> 52<br />\
    <img src="styles/legend/Selly_3_4.png" /> 71<br />\
    <img src="styles/legend/Selly_3_5.png" /> 84<br />' });
var format_TitikSelly_4 = new ol.format.GeoJSON();
var features_TitikSelly_4 = format_TitikSelly_4.readFeatures(json_TitikSelly_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikSelly_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikSelly_4.addFeatures(features_TitikSelly_4);
var lyr_TitikSelly_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikSelly_4, 
                style: style_TitikSelly_4,
                popuplayertitle: 'Titik Selly',
                interactive: true,
                title: '<img src="styles/legend/TitikSelly_4.png" /> Titik Selly'
            });
var format_Jalan_Pasuruan_3_5 = new ol.format.GeoJSON();
var features_Jalan_Pasuruan_3_5 = format_Jalan_Pasuruan_3_5.readFeatures(json_Jalan_Pasuruan_3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Pasuruan_3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Pasuruan_3_5.addFeatures(features_Jalan_Pasuruan_3_5);
var lyr_Jalan_Pasuruan_3_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Pasuruan_3_5, 
                style: style_Jalan_Pasuruan_3_5,
                popuplayertitle: 'Jalan_Pasuruan_3',
                interactive: false,
    title: 'Jalan_Pasuruan_3<br />\
    <img src="styles/legend/Jalan_Pasuruan_3_5_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/Jalan_Pasuruan_3_5_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/Jalan_Pasuruan_3_5_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/Jalan_Pasuruan_3_5_3.png" /> Jalan Lain<br />\
    <img src="styles/legend/Jalan_Pasuruan_3_5_4.png" /> Jalan Setapak<br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_Selly_3.setVisible(true);lyr_TitikSelly_4.setVisible(true);lyr_Jalan_Pasuruan_3_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_OpenStreetMap_1,lyr_GoogleSatellite_2,lyr_Selly_3,lyr_TitikSelly_4,lyr_Jalan_Pasuruan_3_5];
lyr_Selly_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'KECAMATAN': 'KECAMATAN', 'ZONA': 'ZONA', 'LUAS': 'LUAS', 'fdg': 'fdg', 'Shape_Leng': 'Shape_Leng', 'TipePoly': 'TipePoly', 'NOZN': 'NOZN', 'PENGGUNAAN': 'PENGGUNAAN', 'SMPBKREL': 'SMPBKREL', 'SMPBAKU': 'SMPBAKU', 'NILAIZN': 'NILAIZN', 'JMLSMPL': 'JMLSMPL', 'NILMIN': 'NILMIN', 'NILMAKS': 'NILMAKS', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'THNNILAI': 'THNNILAI', 'cluster': 'cluster', 'JNSZN': 'JNSZN', 'Shape_Le_1': 'Shape_Le_1', 'Surveyor': 'Surveyor', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'NOZN.2': 'NOZN.2', });
lyr_TitikSelly_4.set('fieldAliases', {'No_Urut_En': 'No_Urut_En', 'Kode_Titik': 'Kode_Titik', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'XTM': 'XTM', 'YTM': 'YTM', 'Status_Kep': 'Status_Kep', 'Jenis_Data': 'Jenis_Data', 'Tanggal_Pe': 'Tanggal_Pe', 'Harga': 'Harga', 'Luas_tanah': 'Luas_tanah', 'Penggunaan': 'Penggunaan', 'Luas_Bangu': 'Luas_Bangu', 'Tahun_Pemb': 'Tahun_Pemb', 'Tahun_Reno': 'Tahun_Reno', });
lyr_Jalan_Pasuruan_3_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'Shape_Leng': 'Shape_Leng', });
lyr_Selly_3.set('fieldImages', {'OBJECTID_1': 'Range', 'OBJECTID': 'Range', 'KECAMATAN': 'TextEdit', 'ZONA': 'TextEdit', 'LUAS': 'TextEdit', 'fdg': 'TextEdit', 'Shape_Leng': 'TextEdit', 'TipePoly': 'TextEdit', 'NOZN': 'Range', 'PENGGUNAAN': 'TextEdit', 'SMPBKREL': 'TextEdit', 'SMPBAKU': 'TextEdit', 'NILAIZN': 'TextEdit', 'JMLSMPL': 'TextEdit', 'NILMIN': 'Range', 'NILMAKS': 'Range', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'THNNILAI': 'Range', 'cluster': 'TextEdit', 'JNSZN': 'Range', 'Shape_Le_1': 'TextEdit', 'Surveyor': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'NOZN.2': 'TextEdit', });
lyr_TitikSelly_4.set('fieldImages', {'No_Urut_En': 'TextEdit', 'Kode_Titik': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'XTM': 'TextEdit', 'YTM': 'TextEdit', 'Status_Kep': 'TextEdit', 'Jenis_Data': 'TextEdit', 'Tanggal_Pe': 'TextEdit', 'Harga': 'TextEdit', 'Luas_tanah': 'TextEdit', 'Penggunaan': 'TextEdit', 'Luas_Bangu': 'TextEdit', 'Tahun_Pemb': 'TextEdit', 'Tahun_Reno': 'TextEdit', });
lyr_Jalan_Pasuruan_3_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Selly_3.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'OBJECTID': 'hidden field', 'KECAMATAN': 'inline label - always visible', 'ZONA': 'inline label - always visible', 'LUAS': 'inline label - always visible', 'fdg': 'hidden field', 'Shape_Leng': 'hidden field', 'TipePoly': 'hidden field', 'NOZN': 'hidden field', 'PENGGUNAAN': 'inline label - always visible', 'SMPBKREL': 'hidden field', 'SMPBAKU': 'hidden field', 'NILAIZN': 'hidden field', 'JMLSMPL': 'hidden field', 'NILMIN': 'hidden field', 'NILMAKS': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'THNNILAI': 'hidden field', 'cluster': 'hidden field', 'JNSZN': 'hidden field', 'Shape_Le_1': 'hidden field', 'Surveyor': 'inline label - always visible', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', 'NOZN.2': 'inline label - always visible', });
lyr_TitikSelly_4.set('fieldLabels', {'No_Urut_En': 'inline label - always visible', 'Kode_Titik': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'XTM': 'hidden field', 'YTM': 'hidden field', 'Status_Kep': 'inline label - always visible', 'Jenis_Data': 'inline label - always visible', 'Tanggal_Pe': 'inline label - always visible', 'Harga': 'inline label - always visible', 'Luas_tanah': 'inline label - always visible', 'Penggunaan': 'inline label - always visible', 'Luas_Bangu': 'inline label - always visible', 'Tahun_Pemb': 'inline label - always visible', 'Tahun_Reno': 'inline label - always visible', });
lyr_Jalan_Pasuruan_3_5.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMRJL': 'inline label - always visible', 'KONRJL': 'inline label - always visible', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'Shape_Leng': 'no label', });
lyr_Jalan_Pasuruan_3_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});