"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async getCompanies() {
        console.log('------------------------');
        console.log('getCompanies123');
        console.log('------------------------');
        return await this.appService.getCompany();
    }
    async checkPopularCompanyById(companyId) {
        console.log('------------------------');
        console.log('checkPopularCompanyById', companyId);
        console.log('------------------------');
        return await this.appService.checkPopularCompanyById(Number(companyId));
    }
    async getJobs(companyId) {
        console.log('------------------------');
        console.log('companyId', companyId);
        console.log('------------------------');
        return await this.appService.getJobByCompanyId(Number(companyId));
    }
    async userSubcribe(body) {
        console.log('------------------------');
        console.log('body', body);
        console.log('------------------------');
        return { success: true, data: body };
    }
};
__decorate([
    (0, common_1.Get)('company'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getCompanies", null);
__decorate([
    (0, common_1.Get)('popularCompany/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "checkPopularCompanyById", null);
__decorate([
    (0, common_1.Post)('job'),
    __param(0, (0, common_1.Body)('companyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getJobs", null);
__decorate([
    (0, common_1.Post)('user-subcribe'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "userSubcribe", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map