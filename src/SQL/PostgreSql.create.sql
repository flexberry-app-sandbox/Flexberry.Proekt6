




CREATE TABLE ОтчОРасОсМат (
 primaryKey UUID NOT NULL,
 КолПоАктТек INT NULL,
 НормаРасхода INT NULL,
 СуммаИтого REAL NULL,
 ДокСмета UUID NOT NULL,
 Номенклатура UUID NOT NULL,
 РасхМатВСтро UUID NOT NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE РасхМатВСтро (
 primaryKey UUID NOT NULL,
 ЦенаЗаЕд REAL NULL,
 СуммаИтого REAL NULL,
 Количество REAL NULL,
 КодСДР INT NULL,
 Номенклатура UUID NOT NULL,
 ЕдИзмерен UUID NOT NULL,
 ДокСмета UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ДокСмета (
 primaryKey UUID NOT NULL,
 ОбщСметСтои REAL NULL,
 Количество INT NULL,
 ЦенаЗаЕд REAL NULL,
 НомСметРасч INT NULL,
 ОбРабПоСмет REAL NULL,
 ЕдИзмерен UUID NOT NULL,
 ОбъектСМР UUID NOT NULL,
 СпрКонтраг UUID NOT NULL,
 Номенклатура UUID NOT NULL,
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
 Выполнение REAL NULL,
 СумКонечОстат REAL NULL,
 НомерДогово INT NULL,
 ДокУсловДог UUID NOT NULL,
 СпрКонтраг UUID NOT NULL,
 Сотрудники UUID NOT NULL,
 ДокСмета UUID NOT NULL,
 ОбъектСМР UUID NOT NULL,
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
 ДокСмета UUID NOT NULL,
 ОбъектСМР UUID NOT NULL,
 СпрКонтраг UUID NOT NULL,
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
 ДокСмета UUID NOT NULL,
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



 ALTER TABLE ОтчОРасОсМат ADD CONSTRAINT FKb57bf0e10414822d32409f96852a9d03b9fb7319 FOREIGN KEY (ДокСмета) REFERENCES ДокСмета; 
CREATE INDEX Indexb57bf0e10414822d32409f96852a9d03b9fb7319 on ОтчОРасОсМат (ДокСмета); 

 ALTER TABLE ОтчОРасОсМат ADD CONSTRAINT FKad1ec51d0909ff2a15e69d7588292b309888a06f FOREIGN KEY (Номенклатура) REFERENCES Номенклатура; 
CREATE INDEX Indexad1ec51d0909ff2a15e69d7588292b309888a06f on ОтчОРасОсМат (Номенклатура); 

 ALTER TABLE ОтчОРасОсМат ADD CONSTRAINT FK48867c37cd4ad9dd35c64503308a5f4a4641ff15 FOREIGN KEY (РасхМатВСтро) REFERENCES РасхМатВСтро; 
CREATE INDEX Index48867c37cd4ad9dd35c64503308a5f4a4641ff15 on ОтчОРасОсМат (РасхМатВСтро); 

 ALTER TABLE ОтчОРасОсМат ADD CONSTRAINT FKa38efd010a44d3840bcaec07030440b464955959 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Indexa38efd010a44d3840bcaec07030440b464955959 on ОтчОРасОсМат (Сотрудники); 

 ALTER TABLE РасхМатВСтро ADD CONSTRAINT FKd6061a5ff83cbd4730cef6aacb987394cfd2c8d6 FOREIGN KEY (Номенклатура) REFERENCES Номенклатура; 
CREATE INDEX Indexd6061a5ff83cbd4730cef6aacb987394cfd2c8d6 on РасхМатВСтро (Номенклатура); 

 ALTER TABLE РасхМатВСтро ADD CONSTRAINT FK2419758701318a63eba999f09a97ce1684627ea8 FOREIGN KEY (ЕдИзмерен) REFERENCES ЕдИзмерен; 
CREATE INDEX Index2419758701318a63eba999f09a97ce1684627ea8 on РасхМатВСтро (ЕдИзмерен); 

 ALTER TABLE РасхМатВСтро ADD CONSTRAINT FKc65f6f75e20260f8a7db5aca5f1684a21a878e1a FOREIGN KEY (ДокСмета) REFERENCES ДокСмета; 
CREATE INDEX Indexc65f6f75e20260f8a7db5aca5f1684a21a878e1a on РасхМатВСтро (ДокСмета); 

 ALTER TABLE ДокСмета ADD CONSTRAINT FK8a6d39f4994393db4b33bec9bc715a465bd840b1 FOREIGN KEY (ЕдИзмерен) REFERENCES ЕдИзмерен; 
CREATE INDEX Index8a6d39f4994393db4b33bec9bc715a465bd840b1 on ДокСмета (ЕдИзмерен); 

 ALTER TABLE ДокСмета ADD CONSTRAINT FKd8ed78c0e847f2c5452a78e27d8cb528e829685d FOREIGN KEY (ОбъектСМР) REFERENCES ОбъектСМР; 
CREATE INDEX Indexd8ed78c0e847f2c5452a78e27d8cb528e829685d on ДокСмета (ОбъектСМР); 

 ALTER TABLE ДокСмета ADD CONSTRAINT FKfdcd57f6886b31c67ef3d79f10d0e20496a920a3 FOREIGN KEY (СпрКонтраг) REFERENCES СпрКонтраг; 
CREATE INDEX Indexfdcd57f6886b31c67ef3d79f10d0e20496a920a3 on ДокСмета (СпрКонтраг); 

 ALTER TABLE ДокСмета ADD CONSTRAINT FKfec11f74bb5ea8d2951bd21585b2a5ac07b6e78f FOREIGN KEY (Номенклатура) REFERENCES Номенклатура; 
CREATE INDEX Indexfec11f74bb5ea8d2951bd21585b2a5ac07b6e78f on ДокСмета (Номенклатура); 

 ALTER TABLE ОтПоВыпДогов ADD CONSTRAINT FK7b0626ce2b902d35792e82ef7998ce6d17263a8b FOREIGN KEY (ДокУсловДог) REFERENCES ДокУсловДог; 
CREATE INDEX Index7b0626ce2b902d35792e82ef7998ce6d17263a8b on ОтПоВыпДогов (ДокУсловДог); 

 ALTER TABLE ОтПоВыпДогов ADD CONSTRAINT FKe1b805c0a07eeea92cc9ebe90ef6efda26ad35a8 FOREIGN KEY (СпрКонтраг) REFERENCES СпрКонтраг; 
CREATE INDEX Indexe1b805c0a07eeea92cc9ebe90ef6efda26ad35a8 on ОтПоВыпДогов (СпрКонтраг); 

 ALTER TABLE ОтПоВыпДогов ADD CONSTRAINT FKbf0fca5eefcdd6772e1ea0480cbc90e2785e03a2 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Indexbf0fca5eefcdd6772e1ea0480cbc90e2785e03a2 on ОтПоВыпДогов (Сотрудники); 

 ALTER TABLE ОтПоВыпДогов ADD CONSTRAINT FK164a80cac803c6aa8497b7f8826c9075082ad268 FOREIGN KEY (ДокСмета) REFERENCES ДокСмета; 
CREATE INDEX Index164a80cac803c6aa8497b7f8826c9075082ad268 on ОтПоВыпДогов (ДокСмета); 

 ALTER TABLE ОтПоВыпДогов ADD CONSTRAINT FK54b0988fd051a63b48f343559b579d30b69a5de9 FOREIGN KEY (ОбъектСМР) REFERENCES ОбъектСМР; 
CREATE INDEX Index54b0988fd051a63b48f343559b579d30b69a5de9 on ОтПоВыпДогов (ОбъектСМР); 

 ALTER TABLE ДокУсловДог ADD CONSTRAINT FKf71c2d39437406f39d509b13f6635352d4816381 FOREIGN KEY (ДокСмета) REFERENCES ДокСмета; 
CREATE INDEX Indexf71c2d39437406f39d509b13f6635352d4816381 on ДокУсловДог (ДокСмета); 

 ALTER TABLE ДокУсловДог ADD CONSTRAINT FKce589f99d72f2778e90b4830d1f66ce21b3b11ae FOREIGN KEY (ОбъектСМР) REFERENCES ОбъектСМР; 
CREATE INDEX Indexce589f99d72f2778e90b4830d1f66ce21b3b11ae on ДокУсловДог (ОбъектСМР); 

 ALTER TABLE ДокУсловДог ADD CONSTRAINT FKd6af110b36a4e825659018fa00c1edffcc03b17d FOREIGN KEY (СпрКонтраг) REFERENCES СпрКонтраг; 
CREATE INDEX Indexd6af110b36a4e825659018fa00c1edffcc03b17d on ДокУсловДог (СпрКонтраг); 

 ALTER TABLE Сотрудники ADD CONSTRAINT FK171da32c3a46411f455935f74af2aa921a3eada1 FOREIGN KEY (СпраДолжнос) REFERENCES СпраДолжнос; 
CREATE INDEX Index171da32c3a46411f455935f74af2aa921a3eada1 on Сотрудники (СпраДолжнос); 

 ALTER TABLE ТЧСмета ADD CONSTRAINT FKbd4a0df0c0953d5ff8c771befbf6881dc1e1c598 FOREIGN KEY (ДокСмета) REFERENCES ДокСмета; 
CREATE INDEX Indexbd4a0df0c0953d5ff8c771befbf6881dc1e1c598 on ТЧСмета (ДокСмета); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

