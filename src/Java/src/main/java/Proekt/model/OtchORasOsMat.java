package Proekt.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ОтчОРасОсМат
 */
@Entity(name = "IISProektОтчОРасОсМат")
@Table(schema = "public", name = "ОтчОРасОсМат")
public class OtchORasOsMat {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КолПоАктТек")
    private Integer колпоакттек;

    @Column(name = "НормаРасхода")
    private Integer нормарасхода;

    @Column(name = "СуммаИтого")
    private Float суммаитого;


    public OtchORasOsMat() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКолПоАктТек() {
      return колпоакттек;
    }

    public void setКолПоАктТек(Integer колпоакттек) {
      this.колпоакттек = колпоакттек;
    }

    public Integer getНормаРасхода() {
      return нормарасхода;
    }

    public void setНормаРасхода(Integer нормарасхода) {
      this.нормарасхода = нормарасхода;
    }

    public Float getСуммаИтого() {
      return суммаитого;
    }

    public void setСуммаИтого(Float суммаитого) {
      this.суммаитого = суммаитого;
    }


}