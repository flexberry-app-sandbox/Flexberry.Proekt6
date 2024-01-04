package Proekt.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ОбъектСМР
 */
@Entity(name = "IISProektОбъектСМР")
@Table(schema = "public", name = "ОбъектСМР")
public class Ob'ektSMR {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ОбъектСтроит")
    private String объектстроит;

    @Column(name = "Код")
    private Integer код;


    public Ob'ektSMR() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getОбъектСтроит() {
      return объектстроит;
    }

    public void setОбъектСтроит(String объектстроит) {
      this.объектстроит = объектстроит;
    }

    public Integer getКод() {
      return код;
    }

    public void setКод(Integer код) {
      this.код = код;
    }


}