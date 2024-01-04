package Proekt.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: РасхМатВСтро
 */
@Entity(name = "IISProektРасхМатВСтро")
@Table(schema = "public", name = "РасхМатВСтро")
public class RasxMatVStro {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ЦенаЗаЕд")
    private Float ценазаед;

    @Column(name = "СуммаИтого")
    private Float суммаитого;

    @Column(name = "Количество")
    private Float количество;

    @Column(name = "КодСДР")
    private Integer кодсдр;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nomenklatura")
    @Convert("Nomenklatura")
    @Column(name = "Номенклатура", length = 16, unique = true, nullable = false)
    private UUID _nomenklaturaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nomenklatura", insertable = false, updatable = false)
    private Nomenklatura nomenklatura;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "EdIzmeren")
    @Convert("EdIzmeren")
    @Column(name = "ЕдИзмерен", length = 16, unique = true, nullable = false)
    private UUID _edizmerenid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "EdIzmeren", insertable = false, updatable = false)
    private EdIzmeren edizmeren;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DokSmeta")
    @Convert("DokSmeta")
    @Column(name = "ДокСмета", length = 16, unique = true, nullable = false)
    private UUID _doksmetaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DokSmeta", insertable = false, updatable = false)
    private DokSmeta doksmeta;


    public RasxMatVStro() {
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

    public Float getСуммаИтого() {
      return суммаитого;
    }

    public void setСуммаИтого(Float суммаитого) {
      this.суммаитого = суммаитого;
    }

    public Float getКоличество() {
      return количество;
    }

    public void setКоличество(Float количество) {
      this.количество = количество;
    }

    public Integer getКодСДР() {
      return кодсдр;
    }

    public void setКодСДР(Integer кодсдр) {
      this.кодсдр = кодсдр;
    }


}