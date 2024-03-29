﻿



CREATE TABLE [ОтчОРасОсМат] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [КолПоАктТек] INT  NULL,

	 [НормаРасхода] INT  NULL,

	 [СуммаИтого] REAL  NULL,

	 [ДокСмета] UNIQUEIDENTIFIER  NOT NULL,

	 [Номенклатура] UNIQUEIDENTIFIER  NOT NULL,

	 [РасхМатВСтро] UNIQUEIDENTIFIER  NOT NULL,

	 [Сотрудники] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [РасхМатВСтро] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [КодСДР] INT  NULL,

	 [Количество] REAL  NULL,

	 [СуммаИтого] REAL  NULL,

	 [ЦенаЗаЕд] REAL  NULL,

	 [ДокСмета] UNIQUEIDENTIFIER  NOT NULL,

	 [ЕдИзмерен] UNIQUEIDENTIFIER  NOT NULL,

	 [Номенклатура] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ДокСмета] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Количество] INT  NULL,

	 [НомСметРасч] INT  NULL,

	 [ОбРабПоСмет] REAL  NULL,

	 [ОбщСметСтои] REAL  NULL,

	 [ЦенаЗаЕд] REAL  NULL,

	 [ЕдИзмерен] UNIQUEIDENTIFIER  NOT NULL,

	 [Номенклатура] UNIQUEIDENTIFIER  NOT NULL,

	 [ОбъектСМР] UNIQUEIDENTIFIER  NOT NULL,

	 [СпрКонтраг] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ОбъектСМР] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Код] INT  NULL,

	 [ОбъектСтроит] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ЕдИзмерен] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Код] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 [ПолноеИмя] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ОтПоВыпДогов] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Выполнение] REAL  NULL,

	 [НомерДогово] INT  NULL,

	 [СумКонечОстат] REAL  NULL,

	 [ДокСмета] UNIQUEIDENTIFIER  NOT NULL,

	 [ДокУсловДог] UNIQUEIDENTIFIER  NOT NULL,

	 [ОбъектСМР] UNIQUEIDENTIFIER  NOT NULL,

	 [Сотрудники] UNIQUEIDENTIFIER  NOT NULL,

	 [СпрКонтраг] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Номенклатура] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Код] INT  NULL,

	 [Наименов] VARCHAR(255)  NULL,

	 [Описание] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [СпраДолжнос] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [КодДолжности] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ДокУсловДог] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаНачала] DATETIME  NULL,

	 [ДатаОкончан] DATETIME  NULL,

	 [Длительность] INT  NULL,

	 [СумПоДогов] REAL  NULL,

	 [ДокСмета] UNIQUEIDENTIFIER  NOT NULL,

	 [ОбъектСМР] UNIQUEIDENTIFIER  NOT NULL,

	 [СпрКонтраг] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Сотрудники] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ТабелНомер] INT  NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 [СпраДолжнос] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [СпрКонтраг] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ИНН] INT  NULL,

	 [Код] INT  NULL,

	 [КПП] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 [ОГРН] INT  NULL,

	 [Телефон] INT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТЧСмета] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [СтоимМонРаб] REAL  NULL,

	 [СтоимОборуд] REAL  NULL,

	 [СтоимСтроРаб] REAL  NULL,

	 [ДокСмета] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




