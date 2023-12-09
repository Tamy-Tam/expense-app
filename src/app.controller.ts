import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReportType, data } from './data';

@Controller('report/:type')
export class AppController {
  @Get()
  getAlReports(@Param('type') type: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType);
  }

  @Get(':id')
  getIncomeReportById(@Param('type') type: string, @Param('id') id: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;

    return data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
  }

  @Post()
  createtReport() {
    return 'created';
  }

  @Put(':id')
  updateReport() {
    return 'updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'deleted';
  }
}
