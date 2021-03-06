import { AccountHeadEntity } from './entities/account.head.entity';
import { AllowanceBackupEntity } from './entities/allowance.backup.entity';
import { AllowanceDependencyEntity } from './entities/allowance.dependency.entity';
import { AllowanceHeadEntity } from './entities/allowance.head.entity';
import { BlockSalaryEntity } from './entities/block.salary.entity';
import { CollegeContributionEntity } from './entities/college.contribution.entity';
import { CpfTotalEntity } from './entities/cpf.total.entity';
import { DirectAdditionEntity } from './entities/direct.addition.entity';
import { EmployeeBackupEntity } from './entities/employee.backup.entity';
import { EmployeeBankAccountEntity } from './entities/employee.bank.account.entity';
import { EmployeeFundEntity } from './entities/employee.fund.entity';
import { GpfTotalEntity } from './entities/gpf.total.entity';
import { MasterSalaryEntity } from './entities/master.salary.entity';
import { MonthlySalaryEntity } from './entities/monthly.salary.entity';
import { NpsTotalEntity } from './entities/nps.total.entity';
import { RollbackSalaryEntity } from './entities/rollback.salary.entity';

const es6Classes = {
    controllers: [],
    entities: [
        AccountHeadEntity,
        AllowanceBackupEntity,
        AllowanceDependencyEntity,
        AllowanceHeadEntity,
        BlockSalaryEntity,
        CollegeContributionEntity,
        CpfTotalEntity,
        DirectAdditionEntity,
        EmployeeBackupEntity,
        EmployeeBankAccountEntity,
        EmployeeFundEntity,
        GpfTotalEntity,
        MasterSalaryEntity,
        MonthlySalaryEntity,
        NpsTotalEntity,
        RollbackSalaryEntity,
    ],
    services: [],
    subscribers: [],
};

export default es6Classes;
