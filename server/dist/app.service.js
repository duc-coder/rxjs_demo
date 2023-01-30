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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lodash_1 = require("lodash");
const typeorm_2 = require("typeorm");
const company_entity_1 = require("./database/entities/company.entity");
const job_entity_1 = require("./database/entities/job.entity");
const popularCompany2023_entity_1 = require("./database/entities/popularCompany2023.entity");
const user_entity_1 = require("./database/entities/user.entity");
let AppService = class AppService {
    constructor(userRepository, conpanyRepository, jobRepository, popularCompany2023Repository) {
        this.userRepository = userRepository;
        this.conpanyRepository = conpanyRepository;
        this.jobRepository = jobRepository;
        this.popularCompany2023Repository = popularCompany2023Repository;
    }
    async getCompany() {
        const companies = await this.conpanyRepository.find({
            select: ['id', 'name'],
        });
        return companies;
    }
    async getJobByCompanyId(companyId) {
        const jobs = await this.jobRepository.find({
            where: { companyId },
            select: ['id', 'name', 'companyId'],
        });
        return jobs;
    }
    async checkPopularCompanyById(companyId) {
        const isExist = await this.popularCompany2023Repository.findOne({
            where: { companyId },
            select: ['id', 'companyId'],
        });
        console.log('------------------------');
        console.log('isExist', companyId, !(0, lodash_1.isEmpty)(isExist));
        console.log('------------------------');
        return !(0, lodash_1.isEmpty)(isExist);
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.default)),
    __param(1, (0, typeorm_1.InjectRepository)(company_entity_1.default)),
    __param(2, (0, typeorm_1.InjectRepository)(job_entity_1.default)),
    __param(3, (0, typeorm_1.InjectRepository)(popularCompany2023_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map