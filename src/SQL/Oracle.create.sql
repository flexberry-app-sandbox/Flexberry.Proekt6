



CREATE TABLE "ОтчОРасОсМат"
(

	"primaryKey" RAW(16) NOT NULL,

	"КолПоАктТек" NUMBER(10) NULL,

	"НормаРасхода" NUMBER(10) NULL,

	"СуммаИтого" FLOAT(53) NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "РасхМатВСтро"
(

	"primaryKey" RAW(16) NOT NULL,

	"Объем" FLOAT(53) NULL,

	"ЦенаЗаЕд" FLOAT(53) NULL,

	"СуммаИтого" FLOAT(53) NULL,

	"Количество" FLOAT(53) NULL,

	"КодСДР" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ДокСмета"
(

	"primaryKey" RAW(16) NOT NULL,

	"ОбщСметСтои" FLOAT(53) NULL,

	"Количество" NUMBER(10) NULL,

	"ЦенаЗаЕд" FLOAT(53) NULL,

	"НомСметРасч" NUMBER(10) NULL,

	"ОбРабПоСмет" FLOAT(53) NULL,

	"ОбъектСМР" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОбъектСМР"
(

	"primaryKey" RAW(16) NOT NULL,

	"ОбъектСтроит" NVARCHAR2(255) NULL,

	"Код" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЕдИзмерен"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"ПолноеИмя" NVARCHAR2(255) NULL,

	"Код" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОтПоВыпДогов"
(

	"primaryKey" RAW(16) NOT NULL,

	"СумКонечОстат" FLOAT(53) NULL,

	"Выполнение" FLOAT(53) NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Номенклатура"
(

	"primaryKey" RAW(16) NOT NULL,

	"Код" NUMBER(10) NULL,

	"Наименов" NVARCHAR2(255) NULL,

	"Описание" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СпраДолжнос"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"КодДолжности" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ДокУсловДог"
(

	"primaryKey" RAW(16) NOT NULL,

	"Длительность" NUMBER(10) NULL,

	"СумПоДогов" FLOAT(53) NULL,

	"ДатаНачала" DATE NULL,

	"ДатаОкончан" DATE NULL,

	"ДокСмета" RAW(16) NOT NULL,

	"ОбъектСМР" RAW(16) NOT NULL,

	"СпрКонтраг" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудники"
(

	"primaryKey" RAW(16) NOT NULL,

	"ТабелНомер" NUMBER(10) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"СпраДолжнос" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СпрКонтраг"
(

	"primaryKey" RAW(16) NOT NULL,

	"Телефон" NUMBER(10) NULL,

	"КПП" NUMBER(10) NULL,

	"Код" NUMBER(10) NULL,

	"ОГРН" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"ИНН" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧСмета"
(

	"primaryKey" RAW(16) NOT NULL,

	"СтоимСтроРаб" FLOAT(53) NULL,

	"СтоимОборуд" FLOAT(53) NULL,

	"СтоимМонРаб" FLOAT(53) NULL,

	"ДокСмета" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ОтчОРасОсМат"
	ADD CONSTRAINT "ОтчОРасОсМат__2474" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ОтчОРасОсМат__2244" on "ОтчОРасОсМат" ("Сотрудники");

ALTER TABLE "ДокСмета"
	ADD CONSTRAINT "ДокСмета_FОбъ_7023" FOREIGN KEY ("ОбъектСМР") REFERENCES "ОбъектСМР" ("primaryKey");

CREATE INDEX "ДокСмета_IОбъ_5185" on "ДокСмета" ("ОбъектСМР");

ALTER TABLE "ОтПоВыпДогов"
	ADD CONSTRAINT "ОтПоВыпДогов_F_890" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ОтПоВыпДогов__1314" on "ОтПоВыпДогов" ("Сотрудники");

ALTER TABLE "ДокУсловДог"
	ADD CONSTRAINT "ДокУсловДог_F_9952" FOREIGN KEY ("ДокСмета") REFERENCES "ДокСмета" ("primaryKey");

CREATE INDEX "ДокУсловДог_I_7395" on "ДокУсловДог" ("ДокСмета");

ALTER TABLE "ДокУсловДог"
	ADD CONSTRAINT "ДокУсловДог_F_2135" FOREIGN KEY ("ОбъектСМР") REFERENCES "ОбъектСМР" ("primaryKey");

CREATE INDEX "ДокУсловДог_I_8380" on "ДокУсловДог" ("ОбъектСМР");

ALTER TABLE "ДокУсловДог"
	ADD CONSTRAINT "ДокУсловДог_F_2838" FOREIGN KEY ("СпрКонтраг") REFERENCES "СпрКонтраг" ("primaryKey");

CREATE INDEX "ДокУсловДог_I_5945" on "ДокУсловДог" ("СпрКонтраг");

ALTER TABLE "Сотрудники"
	ADD CONSTRAINT "Сотрудники_FС_3109" FOREIGN KEY ("СпраДолжнос") REFERENCES "СпраДолжнос" ("primaryKey");

CREATE INDEX "Сотрудники_IС_7366" on "Сотрудники" ("СпраДолжнос");

ALTER TABLE "ТЧСмета"
	ADD CONSTRAINT "ТЧСмета_FДокС_8650" FOREIGN KEY ("ДокСмета") REFERENCES "ДокСмета" ("primaryKey");

CREATE INDEX "ТЧСмета_IДокС_6858" on "ТЧСмета" ("ДокСмета");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


