




CREATE TABLE ОтчОРасОсМат (
 primaryKey UUID NOT NULL,
 КолПоАктТек INT NULL,
 НормаРасхода INT NULL,
 СуммаИтого REAL NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE РасхМатВСтро (
 primaryKey UUID NOT NULL,
 Объем REAL NULL,
 ЦенаЗаЕд REAL NULL,
 СуммаИтого REAL NULL,
 Количество REAL NULL,
 КодСДР INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ДокСмета (
 primaryKey UUID NOT NULL,
 ОбщСметСтои REAL NULL,
 Количество INT NULL,
 ЦенаЗаЕд REAL NULL,
 НомСметРасч INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ОбъектСМР (
 primaryKey UUID NOT NULL,
 ОбъектСтроит VARCHAR(255) NULL,
 Код INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЕдИзмерен (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 ПолноеИмя VARCHAR(255) NULL,
 Код INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ОтПоВыпДогов (
 primaryKey UUID NOT NULL,
 СумКонечОстат REAL NULL,
 Выполнение REAL NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Номенклатура (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 Наименов VARCHAR(255) NULL,
 Описание VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СпраДолжнос (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 КодДолжности INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ДокУсловДог (
 primaryKey UUID NOT NULL,
 Длительность INT NULL,
 СумПоДогов REAL NULL,
 ДатаНачала TIMESTAMP(3) NULL,
 ДатаОкончан TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудники (
 primaryKey UUID NOT NULL,
 ТабелНомер INT NULL,
 ФИО VARCHAR(255) NULL,
 СпраДолжнос UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СпрКонтраг (
 primaryKey UUID NOT NULL,
 Телефон INT NULL,
 КПП INT NULL,
 Код INT NULL,
 ОГРН INT NULL,
 Наименование VARCHAR(255) NULL,
 ИНН INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧСмета (
 primaryKey UUID NOT NULL,
 СтоимСтроРаб REAL NULL,
 СтоимОборуд REAL NULL,
 СтоимМонРаб REAL NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Сотрудники ADD CONSTRAINT FK171da32c3a46411f455935f74af2aa921a3eada1 FOREIGN KEY (СпраДолжнос) REFERENCES СпраДолжнос; 
CREATE INDEX Index171da32c3a46411f455935f74af2aa921a3eada1 on Сотрудники (СпраДолжнос); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

