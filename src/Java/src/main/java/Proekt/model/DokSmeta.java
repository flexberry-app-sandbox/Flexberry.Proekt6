package Proekt.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: ДокСмета
 */
@Entity(name = "IISProektДокСмета")
@Table(schema = "public", name = "ДокСмета")
public class DokSmeta {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ЦенаЗаЕд")
    private Float ценазаед;

    @Column(name = "ОбщСметСтои")
    private Float общсметстои;

    @Column(name = "Количество")
    private Integer количество;

    @Column(name = "НомСметРасч")
    private Integer номсметрасч;

    @Column(name = "ОбРабПоСмет")
    private Float обрабпосмет;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "EdIzmeren")
    @Convert("EdIzmeren")
    @Column(name = "ЕдИзмерен", length = 16, unique = true, nullable = false)
    private UUID _edizmerenid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "EdIzmeren", insertable = false, updatable = false)
    private EdIzmeren edizmeren;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Ob'ektSMR")
    @Convert("Ob'ektSMR")
    @Column(name = "ОбъектСМР", length = 16, unique = true, nullable = false)
    private UUID _ob'ektsmrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Ob'ektSMR", insertable = false, updatable = false)
    private Ob'ektSMR ob'ektsmr;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SprKontrag")
    @Convert("SprKontrag")
    @Column(name = "СпрКонтраг", length = 16, unique = true, nullable = false)
    private UUID _sprkontragid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SprKontrag", insertable = false, updatable = false)
    private SprKontrag sprkontrag;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nomenklatura")
    @Convert("Nomenklatura")
    @Column(name = "Номенклатура", length = 16, unique = true, nullable = false)
    private UUID _nomenklaturaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nomenklatura", insertable = false, updatable = false)
    private Nomenklatura nomenklatura;

    @OneToMany(mappedBy = "doksmeta", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHSmeta> tchsmetas;


    public DokSmeta() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Float getЦенаЗаЕд() {
      return ценазаед;
    }

    public void setЦенаЗаЕд(Float ценазаед) {
      this.ценазаед = ценазаед;
    }

    public Float getОбщСметСтои() {
      return общсметстои;
    }

    public void setОбщСметСтои(Float общсметстои) {
      this.общсметстои = общсметстои;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }

    public Integer getНомСметРасч() {
      return номсметрасч;
    }

    public void setНомСметРасч(Integer номсметрасч) {
      this.номсметрасч = номсметрасч;
    }

    public Float getОбРабПоСмет() {
      return обрабпосмет;
    }

    public void setОбРабПоСмет(Float обрабпосмет) {
      this.обрабпосмет = обрабпосмет;
    }


}