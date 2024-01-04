package Proekt.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


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

    @Column(name = "ОбщСметСтои")
    private Float общсметстои;

    @Column(name = "Количество")
    private Integer количество;

    @Column(name = "ЦенаЗаЕд")
    private Float ценазаед;

    @Column(name = "НомСметРасч")
    private Integer номсметрасч;


    public DokSmeta() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
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

    public Float getЦенаЗаЕд() {
      return ценазаед;
    }

    public void setЦенаЗаЕд(Float ценазаед) {
      this.ценазаед = ценазаед;
    }

    public Integer getНомСметРасч() {
      return номсметрасч;
    }

    public void setНомСметРасч(Integer номсметрасч) {
      this.номсметрасч = номсметрасч;
    }


}