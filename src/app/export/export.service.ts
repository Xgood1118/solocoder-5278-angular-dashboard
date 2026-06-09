import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class ExportService {
  constructor(private message: NzMessageService) {}

  exportToPdf(element: HTMLElement, filename: string = 'dashboard'): void {
    this.message.loading('正在生成 PDF...', { nzDuration: 0 });

    html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#f5f5f5'
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: canvas.width > canvas.height ? 'landscape' : 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save(`${filename}.pdf`);

      this.message.remove();
      this.message.success('PDF 导出成功');
    }).catch(err => {
      this.message.remove();
      this.message.error('PDF 导出失败');
      console.error('PDF export error:', err);
    });
  }

  exportToPng(element: HTMLElement, filename: string = 'widget'): void {
    this.message.loading('正在生成图片...', { nzDuration: 0 });

    html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#fff'
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = `${filename}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();

      this.message.remove();
      this.message.success('图片导出成功');
    }).catch(err => {
      this.message.remove();
      this.message.error('图片导出失败');
      console.error('PNG export error:', err);
    });
  }

  exportToExcel(data: any[], filename: string = 'data', sheetName: string = 'Sheet1'): void {
    try {
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, sheetName);
      XLSX.writeFile(wb, `${filename}.xlsx`);
      this.message.success('Excel 导出成功');
    } catch (err) {
      this.message.error('Excel 导出失败');
      console.error('Excel export error:', err);
    }
  }

  exportTableToExcel(columns: string[], rows: any[][], filename: string = 'table'): void {
    const data = [columns, ...rows];
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Data');
    XLSX.writeFile(wb, `${filename}.xlsx`);
    this.message.success('Excel 导出成功');
  }

  exportChartImage(chartInstance: any, filename: string = 'chart'): void {
    try {
      const dataUrl = chartInstance.getDataURL({
        type: 'png',
        pixelRatio: 2,
        backgroundColor: '#fff'
      });

      const link = document.createElement('a');
      link.download = `${filename}.png`;
      link.href = dataUrl;
      link.click();

      this.message.success('图表导出成功');
    } catch (err) {
      this.message.error('图表导出失败');
      console.error('Chart export error:', err);
    }
  }
}
