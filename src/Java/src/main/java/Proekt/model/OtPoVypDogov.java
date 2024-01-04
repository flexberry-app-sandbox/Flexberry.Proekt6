package Proekt.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ОтПоВыпДогов
 */
@Entity(name = "IISProektОтПоВыпДогов")
@Table(schema = "public", name = "ОтПоВыпДогов")
public class OtPoVypDogov {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Выполнение")
    private Float выполнение;

    @Column(name = "СумКонечОстат")
    private Float сумконечостат;

    @Column(name = "НомерДогово")
    private Integer номердогово;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DokUslovDog")
    @Convert("DokUslovDog")
    @Column(name = "ДокУсловДог", length = 16, unique = true, nullable = false)
    private UUID _dokuslovdogid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DokUslovDog", insertable = false, updatable = false)
    private DokUslovDog dokuslovdog;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SprKontrag")
    @Convert("SprKontrag")
    @Column(name = "СпрКонтраг", length = 16, unique = true, nullable = false)
    private UUID _sprkontragid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SprKontrag", insertable = false, updatable = false)
    private SprKontrag sprkontrag;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DokSmeta")
    @Convert("DokSmeta")
    @Column(name = "ДокСмета", length = 16, unique = true, nullable = false)
    private UUID _doksmetaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DokSmeta", insertable = false, updatable = false)
    private DokSmeta doksmeta;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Ob'ektSMR")
    @Convert("Ob'ektSMR")
    @Column(name = "ОбъектСМР", length = 16, unique = true, nullable = false)
    private UUID _ob'ektsmrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Ob'ektSMR", insertable = false, updatable = false)
    private Ob'ektSMR ob'ektsmr;


    public OtPoVypDogov() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Float getВыполнение() {
      return выполнение;
    }

    public void setВыполнение(Float выполнение) {
      this.выполнение = выполнение;
    }

    public Float getСумКонечОстат() {
      return сумконечостат;
    }

    public void setСумКонечОстат(Float сумконечостат) {
      this.сумконечостат = сумконечостат;
    }

    public Integer getНомерДогово() {
      return номердогово;
    }

    public void setНомерДогово(Integer номердогово) {
      this.номердогово = номердогово;
    }


}