package Proekt.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


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

    @Column(name = "Объем")
    private Float объем;

    @Column(name = "ЦенаЗаЕд")
    private Float ценазаед;

    @Column(name = "СуммаИтого")
    private Float суммаитого;

    @Column(name = "Количество")
    private Float количество;

    @Column(name = "КодСДР")
    private Integer кодсдр;


    public RasxMatVStro() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Float getОбъем() {
      return объем;
    }

    public void setОбъем(Float объем) {
      this.объем = объем;
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